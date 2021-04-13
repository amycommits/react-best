import React from 'react'
import TextInput from './FormFields/TextInput'
import DateInput from './FormFields/DateInput'
import TextArea from './FormFields/TextArea'
export default function App() {
  return (
    <div className="App">
      <TextInput name="Company Name" />
      <TextInput name="Job Title" />
      <TextInput name="Job Description" />
      <DateInput name="Date Applied" />
      <TextArea name="First Impression" />
    </div>
  );
}
