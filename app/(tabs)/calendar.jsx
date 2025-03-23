import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// Get the screen dimensions for full width/height
const { width, height } = Dimensions.get('window');

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Current month
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Current year

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (month, year) => {
    // Get the number of days in the month
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
    return new Date(year, month, 1).getDay();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear); // Get the first day of the month

    // Create an array of days with empty slots before the 1st of the month
    const calendarDays = Array(firstDayOfMonth).fill(null).concat(
      Array.from({ length: daysInMonth }, (_, i) => i + 1)
    );

    // Ensure the calendar grid is filled to the last row (so it has 6 rows max)
    while (calendarDays.length < 42) {
      calendarDays.push(null);
    }

    return calendarDays;
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // January
      setCurrentYear(currentYear + 1); // Move to next year
    } else {
      setCurrentMonth(currentMonth + 1); // Move to the next month
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); // December
      setCurrentYear(currentYear - 1); // Move to previous year
    } else {
      setCurrentMonth(currentMonth - 1); // Move to the previous month
    }
  };

  const calendarDays = generateCalendar();

  return (
    <View style={styles.container}>
      {/* Calendar Header with Navigation Buttons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePreviousMonth} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {`${new Date(currentYear, currentMonth).toLocaleString('default', {
            month: 'long',
          })} ${currentYear}`}
        </Text>
        <TouchableOpacity onPress={handleNextMonth} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Weekdays Header */}
      <View style={styles.weekdays}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.weekdayText}>
            {day}
          </Text>
        ))}
      </View>

      {/* Calendar Grid */}
      <View style={styles.calendarGrid}>
        {calendarDays.map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayContainer,
              !day && { backgroundColor: 'transparent' }, // If no day, make it transparent
            ]}
          >
            {day && <Text style={styles.dayText}>{day}</Text>}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 0,
    paddingBottom: 84, // Reserve space for the tab bar
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  navButton: {
    paddingHorizontal: 50,
  },
  navButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  monthText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weekdays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  weekdayText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    width: width / 7, // Make it fit 7 days across
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  dayContainer: {
    width: width / 7, // Full width divided by 7 days
    height: (height - 300) / 6, // Adjust height based on available height (after header and weekday headers)
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'flex-start', // Align items to the top left corner
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    position: 'relative', // For positioning the day number absolutely
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute', // Absolute positioning for the top-left corner
    top: 5,
    left: 5,
  },
});


export default Calendar;
