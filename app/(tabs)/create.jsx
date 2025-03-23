import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons from MaterialIcons

const Create = () => {
  const [form, setForm] = useState({ task: '' }); // For adding tasks
  const [tasks, setTasks] = useState([]); // To store the tasks
  const [editingIndex, setEditingIndex] = useState(null); // To keep track of task being edited
  const [editedTask, setEditedTask] = useState(''); // To store the task being edited

  const handleAddTask = () => {
    if (form.task.trim() !== '') {
      setTasks([form.task, ...tasks]); // Add the task to the top of the list
      setForm({ task: '' }); // Clear the input field
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index); // Set the editing index to the task being edited
    setEditedTask(tasks[index]); // Populate the task text for editing
  };

  const handleSaveTask = () => {
    if (editedTask.trim() !== '') {
      const updatedTasks = tasks.map((task, index) =>
        index === editingIndex ? editedTask : task
      );
      setTasks(updatedTasks);
      setEditingIndex(null); // Reset the editing state after saving
      setEditedTask(''); // Clear the edited task
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null); // Cancel editing
    setEditedTask(''); // Reset the task text
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 15,
      borderRadius: 5,
      width: '80%', // Same width for the Add Task input field
    },
    addTaskInput: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginBottom: 15,
      borderRadius: 5,
      width: '80%', // Same width for the Add Task input field
    },
    container: {
      flex: 2,
      justifyContent: 'center',
    },
    inner: {
      height: '100%',
      padding: 24,
      flex: 1,
      justifyContent: 'center',
      marginTop: 10,
    },
    taskText: {
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: '#f1f1f1',
      marginBottom: 5,
      borderRadius: 5,
      flex: 1,
      justifyContent: 'center',
      width: '80%', // Keep the task text width the same as the input field
    },
    taskListContainer: {
      width: '100%',
      marginBottom: 20,
    },
    taskActions: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    actionIcon: {
      marginLeft: 10,
      color: '#4caf50', // Edit button color (green)
      fontSize: 24,
    },
    deleteIcon: {
      marginLeft: 10,
      color: '#ff6347', // Delete button color (red)
      fontSize: 24,
    },
    taskContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
  });

  return (
    <SafeAreaView className="bg-primary h-full justify-center">
      <View style={styles.inner}>
        {/* Task list */}
        <View style={styles.taskListContainer}>
          <FlatList
            data={tasks}
            renderItem={({ item, index }) => (
              <View style={styles.taskContainer}>
                {/* Task Text */}
                {editingIndex === index ? (
                  <TextInput
                    value={editedTask}
                    onChangeText={(text) => setEditedTask(text)}
                    style={styles.input} // The size remains consistent with the task text
                    autoFocus
                    keyboardType="default"
                  />
                ) : (
                  <Text style={styles.taskText}>{item}</Text> // Display task text
                )}

                {/* Task actions: Edit and Delete icons */}
                <View style={styles.taskActions}>
                  {editingIndex === index ? (
                    <>
                      <TouchableOpacity
                        onPress={handleSaveTask} // Save the edited task
                      >
                        <Icon name="check" style={[styles.actionIcon, { color: 'green' }]} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={handleCancelEdit} // Cancel editing
                      >
                        <Icon name="close" style={[styles.actionIcon, { color: 'red' }]} />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      <TouchableOpacity
                        onPress={() => handleEditTask(index)} // Start editing
                      >
                        <Icon name="edit" style={styles.actionIcon} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleDeleteTask(index)} // Delete task
                      >
                        <Icon name="delete" style={styles.deleteIcon} />
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <Text className="text-base text-gray-200 font-pmedium mb-5">Add event</Text>

        {/* Input field for adding a new task */}
        <TextInput
          onChangeText={(e) => setForm({ task: e })}
          value={form.task}
          style={styles.addTaskInput} // This is where I applied the original "Add Task" size
          placeholder="Enter a task"
        />

        {/* Add Task Button */}
        <CustomButton
          title="Add Task"
          handlePress={handleAddTask} // Add the task when clicked
          containerStyles="mt-5 h-[40px] mb-5"
        />

        <StatusBar backgroundColor="#161622" style="light" />
      </View>
    </SafeAreaView>
  );
};

export default Create;
