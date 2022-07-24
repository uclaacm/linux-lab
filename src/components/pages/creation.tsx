import Bar from '../shared/progressbar';

function Creation(): JSX.Element {
  return (
    <div>
      Creation
      <Bar totalsteps={6} currentstep={2} />
    </div>
  );
}

export default Creation;
