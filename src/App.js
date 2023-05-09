import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';
import './App.css';

function App() {

  const data = [
    {
      "Id": "1",
      "Tittle": "Task 1",
      "Status": "Open",
      "Summary": 'Analyze the new requirements gathered from the customer.',
      "Type": 'Story',
      "Priority": 'Normal',
      "Estimate": "2",
      "Assignee": "Nancy Davloio",
    },
    {
      "Id": "2",
      "Tittle": "Task 2",
      "Status": "Open",
      "Summary": 'POD scrum.',
      "Type": 'Story',
      "Priority": 'Normal',
      "Estimate": "2",
      "Assignee": "Nancy Davloio",
    },
    {
      "Id": "3",
      "Tittle": "Task 1",
      "Status": "InProgress",
      "Summary": 'lorem ipsum',
      "Type": 'Story',
      "Priority": 'Normal',
      "Estimate": "2",
      "Assignee": "Nancy Davloio",
    },
    {
      "Id": "4",
      "Tittle": "Task 2",
      "Status": "InProgress",
      "Summary": 'Siddhesh Shirodkar.',
      "Type": 'Story',
      "Priority": 'Normal',
      "Estimate": "2",
      "Assignee": "Nancy Davloio",
    },
    {
      "Id": "5",
      "Tittle": "Task 1",
      "Status": "InProgress",
      "Summary": 'SJ Innovation',
      "Type": 'Story',
      "Priority": 'Normal',
      "Estimate": "2",
      "Assignee": "Nancy Davloio",
    },
    {
      "Id": "6",
      "Tittle": "Task 1",
      "Status": "Testing",
      "Summary": 'Amol Bhandari',
      "Type": 'Story',
      "Priority": 'Normal',
      "Estimate": "2",
      "Assignee": "Nancy Davloio",
    },
    {
      "Id": "7",
      "Tittle": "Task 1",
      "Status": "Testing",
      "Summary": 'Sankalp',
      "Type": 'Story',
      "Priority": 'Normal',
      "Estimate": "2",
      "Assignee": "Nancy Davloio",
    },
    {
      "Id": "8",
      "Tittle": "Task 1",
      "Status": "Testing",
      "Summary": 'Amey Phadte',
      "Type": 'Story',
      "Priority": 'Normal',
      "Estimate": "2",
      "Assignee": "Nancy Davloio",
    },
  ];



    return(<KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open"/>
          <ColumnDirective headerText="In Progress" keyField="InProgress"/>
          <ColumnDirective headerText="Testing" keyField="Testing"/>
          <ColumnDirective headerText="Done" keyField="Close"/>
        </ColumnsDirective>
    </KanbanComponent>);
    
}
export default App;