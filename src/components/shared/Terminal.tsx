import React, { useState } from 'react';
import '../../styles/Terminal.scss';

function isValid(usertyped : string)
{
  switch(usertyped) {

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
    setInput('$ ');
  };

  return (
    <div className="terminal">
      <div>
        {commands.map((command: string, key: number) => {
          isValid(command);
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
