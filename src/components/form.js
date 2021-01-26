import React from 'react'
import TextInput from './FormFields/TextInput'
export default function App() {
  return (
    <div className="App">
      <TextInput name="Company Name" />
      <TextInput name="Job Title" />
      <TextInput name="Job Description" />
    </div>
  );
}
