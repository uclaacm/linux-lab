import React, { useState } from 'react';
import '../../styles/Terminal.scss';

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
                {commands.map((command: string) => {
                    return <p className="command">{command}</p>;
                })}
            </div>
            <form onSubmit={handleSubmit} id="input-form">
                <input type="text"
                    className="command"
                    value={input}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
  }

  export default Terminal;