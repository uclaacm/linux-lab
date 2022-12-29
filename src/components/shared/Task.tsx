import { RefObject, useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillCheckCircle } from 'react-icons/ai';
import './../../styles/Task.scss';
import { useReward } from 'react-rewards';
import FileSystemRender from './FileSystemRender';
import { Directory } from './globalTypes';
import Terminal from './Terminal';
import './../../styles/global.scss';

const defaultProps = {
  displayFileSystem: false,
};

type TaskProps = {
  taskPrompt: JSX.Element | string;
  taskName: string;
  solutions: Array<string>;
  fileSystem: Directory;
  currentWorkingDirectory: Directory;
} & typeof defaultProps;

function Task({
  taskPrompt,
  taskName,
  solutions,
  fileSystem,
  currentWorkingDirectory,
  displayFileSystem,
}: TaskProps): JSX.Element {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({
    renderWidth: 0,
    renderHeight: 0,
  });

  const { reward, isAnimating } = useReward('rewardId', 'confetti');

  function handleResize(
    currDimensions: RefObject<HTMLInputElement> | RefObject<null> | null
  ): void {
    if (currDimensions && currDimensions.current) {
      setDimensions({
        renderWidth: currDimensions.current.offsetWidth,
        renderHeight: currDimensions.current.offsetHeight,
      });
    } else {
      setDimensions({
        renderWidth: 0,
        renderHeight: 0,
      });
    }
  }

  const [root, setRoot] = useState<Directory>(fileSystem);
  const [CWD, setCWD] = useState<Directory>(currentWorkingDirectory);

  const taskId =
    String(window.location.pathname.substring(1)) +
    String(taskName).replace(/\s/g, '');
  const [completed, setCompleted] = useState<boolean>(
    Boolean(window.localStorage.getItem(taskId)) ?? false
  );
  const [lastCommand, setLastCommand] = useState<string>('');

  useEffect(() => {
    solutions.forEach((solution) => {
      if (
        lastCommand.substring(2) === solution &&
        !isAnimating &&
        window.localStorage.getItem(taskId) !== 'true'
      ) {
        setCompleted(true);
        reward();
        window.localStorage.setItem(taskId, String(true));
        return;
      }
    });
  }, [lastCommand]);

  useEffect(() => {
    handleResize(ref);
    window.addEventListener('resize', () => handleResize(ref));
    return () => window.removeEventListener('resize', () => handleResize(ref));
  }, [ref]);

  return (
    <div className="task">
      <div id="rewardId" />
      <span className="task-header">
        <IconContext.Provider
          value={{
            className: completed ? 'complete' : 'incomplete',
            size: '1.5em',
          }}
        >
          <AiFillCheckCircle />
        </IconContext.Provider>
        {typeof taskName === 'string' ? (
          <h2 className="heading-1 task-name">{taskName}</h2>
        ) : (
          taskName
        )}
      </span>
      {typeof taskPrompt === 'string' ? (
        <p className="body task-prompt">{taskPrompt}</p>
      ) : (
        taskPrompt
      )}
      <div className="task-content" ref={ref}>
        {displayFileSystem && (
          <FileSystemRender data={root} renderDimensions={dimensions} />
        )}
        <Terminal
          fileSystem={root}
          currentWorkingDirectory={CWD}
          setFileSystem={setRoot}
          setCurrentWorkingDirectory={setCWD}
          getLastCommand={setLastCommand}
        />
        {/* TODO: Fix styling for ice-glare-left if displaying the file system render */}
        <div className="ice-glare-left">
          <svg
            width="245"
            height="189"
            viewBox="0 0 245 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 116L125 1H96.7742L0 97V116Z"
              fill="url(#paint0_linear_0_1)"
              fillOpacity="0.5"
            />
            <path
              d="M0 188.5L244.5 0H141L0 130.844V188.5Z"
              fill="url(#paint1_linear_0_1)"
              fillOpacity="0.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="37.5"
                y1="73.5"
                x2="125"
                y2="-11"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop
                  offset="0.540476"
                  stopColor="white"
                  stopOpacity="0.567708"
                />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_1"
                x1="63.5"
                y1="111"
                x2="154.5"
                y2="20.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.28125" stopColor="white" stopOpacity="0.8" />
                <stop
                  offset="0.416667"
                  stopColor="white"
                  stopOpacity="0.583333"
                />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="ice-glare-right">
          <svg
            width="134"
            height="114"
            viewBox="0 0 134 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.5714 114L134 24V0.5L0 114H40.5714Z"
              fill="url(#paint0_linear_558_38)"
              fillOpacity="0.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_558_38"
                x1="71.7802"
                y1="77.2229"
                x2="131.963"
                y2="7.38618"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.28125" stopColor="white" stopOpacity="0.5" />
                <stop offset="0.416667" stopColor="white" stopOpacity="0.3" />
                <stop offset="1" stopColor="white" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="terminal-bottom-icicle">
        <svg
          width="356"
          height="78"
          viewBox="0 0 356 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2722 18.7273C14.0395 18.3102 14.852 18.0405 15.6843 17.9268L50.588 13.158C51.1291 13.084 51.6756 13.0764 52.2202 13.1352L80.6811 16.209C81.2911 16.2749 81.9033 16.2574 82.5075 16.1568L116.492 10.5009C118.001 10.2497 119.544 10.5192 120.965 11.2823L128.057 15.0904C129.447 15.8371 130.955 16.1115 132.434 15.887L173.667 9.62847C174.213 9.54554 174.766 9.53037 175.317 9.58316L216.246 13.5049L261.385 12.7115C261.827 12.7038 262.267 12.6523 262.701 12.5576L302.154 3.9548L321.071 3.13256C322.059 3.08962 323.049 3.26572 323.999 3.65329L336.364 8.69815C337.491 9.15826 338.541 9.9076 339.448 10.901L353.53 26.3155C354.035 26.8692 353.917 27.9081 353.313 28.2182L347.964 30.9658C347.854 31.0222 347.755 31.1075 347.672 31.2164L339.676 41.7839C339.589 41.8989 339.437 41.8573 339.389 41.7053L335.345 28.8654C335.248 28.5577 335.053 28.3174 334.811 28.2079L324.132 23.3706C323.031 22.8717 321.856 22.7393 320.717 22.9858C318.716 23.4192 316.986 24.9866 315.996 27.2645L306.946 48.0947C306.619 48.8476 305.775 48.8348 305.435 48.0718L300.335 36.6325C298.405 32.305 293.522 32.6649 292.139 37.2366C292.043 37.5547 291.756 37.6932 291.517 37.5375L274.204 26.2915C272.18 24.9769 269.758 25.5585 268.29 27.7118C267.561 28.7804 267.135 30.1429 267.08 31.5819L266.478 47.3583C266.47 47.5518 266.29 47.6384 266.183 47.4999L255.828 34.1301C254.516 32.4352 252.833 31.3087 251.02 30.9115L239.643 28.4193C239.484 28.3842 239.32 28.4074 239.172 28.4862L236.777 29.7588C234.675 30.8756 233.018 33.032 232.164 35.7597L226.583 53.5846C226.536 53.736 226.431 53.8437 226.306 53.8699C224.475 54.2536 222.677 52.8132 222.103 50.5022L218.253 35.0261C218.168 34.6859 217.966 34.4136 217.706 34.2914L196.152 24.1404C192.617 22.476 188.709 23.8972 186.44 27.6717L183.092 33.2426C182.919 33.5299 182.642 33.6772 182.359 33.6318C179.253 33.1323 176.239 34.9582 174.586 38.3398L159.116 69.9926C158.811 70.6177 158.122 70.6772 157.734 70.112L147.934 55.8216C146.531 53.7763 144.619 52.4366 142.546 52.0474L125.282 48.8054C125.101 48.7715 124.932 48.6652 124.798 48.5015L115.659 37.327C113.217 34.3417 109.708 33.3795 106.615 34.847L97.9658 38.9496C96.8585 39.4748 95.6127 39.2842 94.6067 38.4355C93.719 37.6866 92.6384 37.4457 91.6264 37.7711L90.6183 38.0954C89.4007 38.4869 88.1111 38.3801 86.9247 37.7895L73.4991 31.105C72.9746 30.8439 72.4098 31.2755 72.3405 31.9902L69.8736 57.4487C69.7562 58.66 68.4381 58.7555 68.1754 57.5718L64.1459 39.4154C62.8552 33.5993 58.288 30.0191 53.7718 31.2832L48.4755 32.7657C44.1312 33.9817 41.2795 39.2865 41.8784 45.038L42.0727 46.9036C42.2022 48.1477 40.9075 48.6576 40.4466 47.544L36.3006 37.5279C34.9403 34.2415 32.4102 32.0252 29.569 31.6311L26.8802 31.2581C22.8188 30.6948 19.4979 35.1704 20.088 40.4122C20.1641 41.088 19.6099 41.5649 19.1519 41.2178L0.926815 27.4079C0.302608 26.9349 0.346237 25.7539 1.00107 25.3979L13.2722 18.7273Z"
            fill="#98C4E7"
          />
          <path
            d="M13.2718 18.7295C14.0394 18.312 14.8522 18.0422 15.6848 17.9284L50.5877 13.1583C51.129 13.0843 51.6757 13.0767 52.2205 13.1356L80.6808 16.2111C81.291 16.2771 81.9035 16.2596 82.508 16.1589L116.492 10.5014C118.001 10.2501 119.544 10.5198 120.966 11.2835L128.056 15.0926C129.447 15.8399 130.955 16.1145 132.435 15.8898L173.667 9.62959C174.213 9.54659 174.766 9.53142 175.317 9.58427L216.246 13.5084L261.385 12.7156C261.827 12.7078 262.267 12.6563 262.702 12.5615L302.154 3.95582L321.071 3.13361C322.059 3.09065 323.05 3.26691 324 3.6548L336.364 8.70175C337.491 9.16215 338.541 9.91188 339.448 10.9057L353.531 26.3279C354.036 26.8816 353.918 27.9202 353.315 28.2304L348.019 30.9515C347.874 31.0257 347.716 31.0475 347.561 31.0146L338.32 29.0556C336.3 28.6274 334.244 29.1297 332.512 30.4749L327.35 34.4845C326.924 34.8152 326.363 34.6053 326.125 34.0263L324.821 30.8555C322.882 26.1373 318.698 23.7314 314.769 25.0745L311.59 26.1613C310.631 26.4894 309.631 26.5995 308.634 26.4868L288.487 24.2088L265.624 25.2025C263.664 25.2877 261.8 26.2301 260.333 27.8764L249.284 40.2815C248.964 40.6414 248.483 40.6385 248.152 40.2747L245.073 36.8871C242.042 33.5518 237.706 33.2175 234.499 36.0717L233.641 36.8353C233.442 37.0126 233.193 37.0714 232.954 36.9975L224.968 34.5226C223.43 34.046 221.83 34.1163 220.339 34.7261L215.446 36.7281C215.286 36.7934 215.114 36.7967 214.951 36.7377L210.96 35.2942C208.598 34.44 206.091 34.9018 204.049 36.5669L200.664 39.3266C200.396 39.5455 200.053 39.5526 199.772 39.345L181.57 25.9069C181.532 25.8787 181.497 25.8435 181.466 25.8024C179.617 23.3151 176.552 23.3898 174.865 25.9632L159.271 49.7584C158.916 50.3005 158.258 50.2668 157.917 49.6891L153.095 41.5164C149.211 34.9341 141.466 35.6011 138.529 42.7708L137.29 45.7944C137.058 46.3626 136.499 46.5478 136.07 46.1988L120.202 33.2831C118.292 31.7287 116.011 31.1721 113.831 31.7286L101.964 34.7571C101.826 34.7923 101.682 34.7832 101.546 34.7304L84.7345 28.2232C83.002 27.5526 81.1638 27.5895 79.473 28.3288L70.8191 32.1126C69.5396 32.672 68.1699 32.8317 66.8199 32.5788L61.9522 31.6671C60.2453 31.3474 58.5165 31.7347 57.014 32.7733L55.8185 33.5996C54.9839 34.1766 54.0163 34.365 53.0741 34.1342L49.9579 33.3707C48.8879 33.1086 47.929 34.1945 47.9901 35.5992C48.0494 36.9636 47.1437 38.0379 46.0977 37.8439L15.0371 32.0834L1.80761 27.1575C1.01319 26.8617 0.926643 25.4431 1.67808 25.0344L13.2718 18.7295Z"
            fill="#D1E6F7"
          />
          <path
            d="M13.2728 18.7232C14.0397 18.3068 14.8515 18.0375 15.6831 17.924L50.5887 13.1578C51.1294 13.084 51.6754 13.0764 52.2195 13.1351L80.6817 16.2051C81.2912 16.2709 81.9028 16.2534 82.5066 16.153L116.494 10.5003C118.002 10.2495 119.543 10.5186 120.963 11.2804L128.058 15.0864C129.448 15.8319 130.954 16.1057 132.432 15.8816L173.668 9.62668C174.213 9.54387 174.765 9.5287 175.316 9.58138L216.245 13.4981L261.385 12.7036C261.827 12.6959 262.266 12.6445 262.7 12.5499L302.154 3.95319L321.072 3.1309C322.06 3.08799 323.049 3.26376 323.998 3.65066L336.364 8.69118C337.491 9.15069 338.54 9.89922 339.448 10.8917L351.723 24.3167C352.436 25.0968 351.865 26.5657 350.968 26.2604L322.255 16.4942C321.017 16.0731 319.729 16.0074 318.481 16.3017L300.89 20.453C300.207 20.6141 299.511 20.6678 298.814 20.613L248.85 16.6819C248.067 16.6203 247.284 16.6959 246.521 16.9066L197.159 30.5521C196.939 30.6128 196.708 30.56 196.514 30.4048L181.73 18.5706C179.907 17.1114 177.751 16.5539 175.666 17.0032L117.056 29.6355C116.321 29.7939 115.571 29.8283 114.826 29.7378L76.3228 25.0707C75.7921 25.0064 75.2591 25.0051 74.7304 25.0671L16.6579 31.87C15.5861 31.9956 14.501 31.861 13.458 31.4733L1.81041 27.1427C1.01556 26.8471 0.928984 25.4277 1.6809 25.0193L13.2728 18.7232Z"
            fill="#E0EDF8"
          />
        </svg>
      </div>
    </div>
  );
}
Task.defaultProps = defaultProps;
export default Task;
