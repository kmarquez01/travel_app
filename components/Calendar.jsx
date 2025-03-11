// import React, {useState} from 'react';
// import {View, TouchableOpacity} from 'react-native';
// import {Agenda} from 'react-native-calendars';
// import {Card, Avatar, Text} from 'react-native-paper';

// const CalendarBlock = () => {

//     const timeToString = (time) => {
//         const date = new Date(time);
//         return date.toISOString().split('T')[0];
//       };

//     // States
//     const [items, setItems] = useState({});

//     const loadItems = (day) => {
//       setTimeout(() => {
//         for (let i = -15; i < 85; i++) {
//           const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//           const strTime = timeToString(time);
//           if (!items[strTime]) {
//             items[strTime] = [];
//             const numItems = Math.floor(Math.random() * 3 + 1);
//             for (let j = 0; j < numItems; j++) {
//               items[strTime].push({
//                 name: 'Item for ' + strTime + ' #' + j,
//                 height: Math.max(50, Math.floor(Math.random() * 150)),
//               });
//             }
//           }
//         }
//         const newItems = {};
//         Object.keys(items).forEach((key) => {
//           newItems[key] = items[key];
//         });
//         setItems(newItems);
//       }, 1000);
//     };
  
//     const renderItem = (item) => {
//       return (
//         <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
//           <Card>
//             <Card.Content>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                 }}>
//                 <Text>{item.name}</Text>
//                 <Avatar.Text label="J" />
//               </View>
//             </Card.Content>
//           </Card>
//         </TouchableOpacity>
//       );
//     };
  
//     return (
//       <View style={{
//         flex: 1,
//         borderWidth: 1,
//         borderColor: 'gray',
//         height: "100%",
//       }}
//        >
//         <Agenda
//           items={items}
//           loadItemsForMonth={loadItems}
//           selected={'2024-05-16'}
//           renderItem={renderItem}
//         />
//       </View>
//     );
//   };




// export default CalendarBlock

// Calendar.jsx

// Calendar.jsx

import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar, Text } from 'react-native-paper';

const CalendarBlock = ({tasks}) => {
  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const [items, setItems] = useState({});

  const loadItems = (day) => {
          setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
            const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: 'Item for ' + strTime + ' #' + j,
                height: Math.max(50, Math.floor(Math.random() * 150)),
              });
            }
          }
        }
        const newItems = {};
        Object.keys(items).forEach((key) => {
          newItems[key] = items[key];
        });
        setItems(newItems);
      }, 1000);
  };
  

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const addEventToCalendar = (task) => {
    const today = timeToString(Date.now());
    setItems((prevItems) => {
      return {
        ...prevItems,
        [today]: [
          ...(prevItems[today] ? prevItems[today] : []),
          {
            name: task,
            height: Math.max(50, Math.floor(Math.random() * 150)),
          },
        ],
      };
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2024-05-16'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CalendarBlock;

// Calendar.jsx
// import React, { useState } from 'react';
// import { View, TouchableOpacity } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import { Card, Avatar, Text } from 'react-native-paper';

// const CalendarBlock = ({ tasks, addEventToCalendar }) => { // Receive addEventToCalendar as a prop
//   const timeToString = (time) => {

//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   };

//   const [items, setItems] = useState({});

//   const loadItems = (day) => {
//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = timeToString(time);
//         if (!items[strTime]) {
//           items[strTime] = [];
//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//            items[strTime].push({
//             name: 'No events for ' + strTime + j,
//             height: 50,
//           });
//           }
//         }
//       }
//       const newItems = {};
//       Object.keys(items).forEach((key) => {
//         newItems[key] = items[key];
//       });

//       setItems(newItems);
//     }, 1000);
//   };


//   const renderItem = (item) => {
//     return (
//       <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
//         <Card>
//           <Card.Content>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}>
//               <Text>{item.name}</Text>
//               <Avatar.Text label="J" />
//             </View>
//           </Card.Content>
//         </Card>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Agenda
//         items={(day) => addEventToCalendar('New Task', day)}
//         loadItemsForMonth={loadItems}
//         selected={'2024-06-12'}
//         renderItem={renderItem}
//         // onDayPress={(day) => addEventToCalendar('New Task', day)}
//       />
//     </View>
//   );
// };

// export default CalendarBlock;

