import React, { useState } from 'react';
import '../../styles/Terminal.scss';

function isValid(usertyped: string) {
  switch (usertyped) {
    case '$ whoami':
      console.log('User input ls');
      break;
    case '$ pwd':
      console.log('User input ls');
      break;
    case '$ man pwd':
      console.log('User input ls');
      break;
    case '$ man whoami':
      console.log('User input ls');
      break;
    case '$ ls':
      console.log('User input ls');
      break;
    case '$ ls -a':
      console.log('User input ls');
      break;
    case '$ ls -l':
      console.log('User input ls');
      break;
    case '$ ls -la':
      console.log('User input ls');
      break;
    case '$ ls -al':
      console.log('User input ls');
      break;
    case '$ cd':
      console.log('User input ls');
      break;
    case '$ touch':
      console.log('User input ls');
      break;
    case '$ mkdir':
      console.log('User input ls');
      break;
    case '$ rm':
      console.log('User input ls');
      break;
    case '$ rmdir':
      console.log('User input ls');
      break;
    case '$ rm -rf':
      console.log('User input ls');
      break;
    case '$ cp':
      console.log('User input ls');
      break;
    case '$ mv':
      console.log('User input ls');
      break;
    case '$ echo':
      console.log('User input ls');
      break;
    case '$ cat':
      console.log('User input ls');
      break;
    case '$ grep':
      console.log('User input ls');
      break;
    case '$ find':
      console.log('User input ls');
      break;
    case '$ chmod':
      console.log('User input ls');
      break;
    default:
      console.log('Invalid command. Try again.');
      break;
  }
}

function Terminal(): JSX.Element {
  const [commands, setCommands] = useState<string[]>([]);
  const [input, setInput] = useState('$ ');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommands([...commands, input]);
    isValid(input);
    setInput('$ ');
  };

  return (
    <div className="terminal">
      <div>
        {commands.map((command: string, key: number) => {
          return (
            <p className="command" key={key}>
              {command}
            </p>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} id="input-form">
        <input
          type="text"
          className="command"
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Terminal;
