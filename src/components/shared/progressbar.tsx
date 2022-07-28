import './progressbarstyle.css';

interface Props {
  totalsteps: number;
  currentstep: number;
}
const Bar: React.FC<Props> = ({ totalsteps, currentstep }: Props) => {
  const arr: number[] = [];
  for (let i = 1; i <= totalsteps; i++) {
    arr.push(i);
  }
  return (
    <div>
      <div id="progress">
        <div id="progress-bar"></div>
        <div id="progress-num">
          <div
            id="progress-num2"
            style={{
              width: `calc(100% * ${(currentstep - 1) / (totalsteps - 1)})`,
            }}
          ></div>
          {arr.map((title) => {
            if (title < currentstep) return <li className="step active">{}</li>;
            else return <li className="step">{}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Bar;

/*MIT License
  Copyright (c) 2021 w3collective
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.*/
