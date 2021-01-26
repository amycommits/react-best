import React from 'react'
import TextInput from './FormFields/TextInput'
import DateInput from './FormFields/DateInput'
export default function App() {
  return (
    <div className="App">
      <TextInput name="Company Name" />
      <TextInput name="Job Title" />
      <TextInput name="Job Description" />
      <DateInput name="Date Applied" />
    </div>
  );
}
