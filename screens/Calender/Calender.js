import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const addTask = () => {
    if (selectedDate && task) {
      setTasks([...tasks, { date: selectedDate, task }]);
      setSelectedDate(null);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <TouchableOpacity style={styles.selectButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.selectButtonText}>Select Date</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          is24Hour={true}
          display="calendar"
          onChange={handleDateChange}
        />
      )}
      {selectedDate && (
        <Text style={styles.selectedDate}>Selected Date: {selectedDate.toDateString()}</Text>
      )}
      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <Text style={styles.taskTitle}>Tasks:</Text>
      <View>
        {tasks.map((item, index) => (
          <View key={index} style={styles.taskCard}>
            <Text>
              Date: {item.date.toDateString()}, Task: {item.task}
            </Text>
            <TouchableOpacity onPress={() => deleteTask(index)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectedDate: {
    fontSize: 16,
    marginVertical: 10,
  },
  selectButton: {
    backgroundColor: '#3498db', // Blue button color
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  selectButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 40,
    marginTop: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'green', // Green button color
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#e6ffe6', // Green background color
    padding: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    width: 300,
  },
  deleteButton: {
    backgroundColor: 'green', // Green button color
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Calendar;
