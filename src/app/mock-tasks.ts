import {Task} from './task';

export const TASKS: Task[] = [
  {
    taskName: 'Display the Tasks',
    taskType: 'scripting',
    description: 'Display the tasks in this JSON as a carousel. The script should allow flipping forward and back between tasks.',
    associatedFile: 'http://northwind.servicestack.net/customers.json'
  },
  {
    taskName: 'Countries and Cities',
    taskType: 'scripting',
    description: 'Build a script to display all existing countries as headings (the Country field)' +
    ' and under each country, display all the cities in that country (the City field).',
    associatedFile: 'http://northwind.servicestack.net/customers.json'
  },
  {
    taskName: 'Identify a piece of code',
    taskType: 'knowledge',
    description: 'What is this?',
    associatedFile: 'https://pastebin.com/f7YNshwb'
  },
  {
    taskName: 'Identify a piece of code',
    taskType: 'knowledge',
    description: 'What is this?',
    associatedFile: 'data:image/jpeg;base64,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' +
    'ifEtlMI9Qxj3NYCWN1chlwc0B//2Q=='
  },
  {
    taskName: 'UI/UX',
    taskType: 'knowledge',
    description: 'Please go over the following design, and provide your insights regarding the interface (no more than 4-5 points).',
    associatedFile: 'http://nihongo-e-na.com/archives/006/201206/large-4fe806d39a5fc.png'
  }
];
