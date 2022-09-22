import tuxBehindIgloo from '../../assets/images/tux-behind-igloo.svg';
import '../../styles/global.scss';

function Stationary(): JSX.Element {
  return (
    <div>
      <h1 className="lesson-title">Stationary Commands</h1>
      <p className="body">
        Linux and the POSIX file system might seem confusing at first, but if
        you&#39;ve ever used a Windows or MacOS computer, there are actually
        quite a few similarities!
      </p>
      <img src={tuxBehindIgloo} alt="tux the penguin behind an igloo" />

      <h2 className="heading-1">
        The <span className="command-in-heading">pwd</span> Command
      </h2>
      <p className="body">
        For example, just as you can make nested folders on Windows/MacOS and
        double click to navigate into one, Linux lets you interact with the file
        system in a similar way, though these “folders” are called{' '}
        <b>directories</b> in Linux.
      </p>
      <br />
      <p className="body">
        Let&#39;s say you have a file called <b>CS35L.pdf</b> in a subfolder.
        Windows users might see a file path like C:\Documents\Notes\CS35L.pdf,
        whereas Mac users might see /Users/UserName/Documents/Notes/ CS35L.pdf.
        To navigate to the Notes folder, you&#39;d have to go relative from the
        folder you are currently in.
      </p>
      <br />
      <p className="body">
        So how do you determine what directory you are in in Linux? The{' '}
        <span className="try-out-command">pwd</span> command lists the present
        working directory.
      </p>
      <h2 className="heading-1">Task 1</h2>
      <p className="body">Try it out in the terminal! Where is Tux?</p>

      <div className="terminal">
        <div className="input-container">
          <input type="text" className="terminal-input" />
          <div className="terminal-top-icicle">
            <svg
              width="163"
              height="72"
              viewBox="0 0 163 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.28192 12.8277C5.94003 10.669 8.25335 9.11794 10.8684 8.41166L19.9216 5.96649C22.2349 5.34168 24.6786 5.40671 26.957 6.15369L33.3078 8.23574C35.8559 9.07114 38.6031 9.05131 41.1379 8.17924L49.6896 5.23709C52.2224 4.3657 55.0245 5.23509 56.6366 7.39245C58.2039 9.48998 60.9026 10.3761 63.3913 9.61043L75.5984 5.85466C77.9206 5.14019 80.4001 5.12985 82.729 5.82494L96.5992 9.96449C97.6505 10.2783 98.7384 10.45 99.8342 10.4751L116.014 10.8462C117.926 10.8901 119.821 10.487 121.552 9.6687L134.613 3.49409C136.106 2.78808 137.725 2.39007 139.373 2.32339L140.567 2.27509C144.09 2.13258 147.507 3.51061 149.964 6.06431L151.546 7.70923C152.697 8.90597 153.6 10.3227 154.201 11.8762L160.992 29.4237C161.155 29.846 161.08 30.3244 160.794 30.6741L158.403 33.6012C158.297 33.7309 158.218 33.8808 158.171 34.042L155.07 44.6291C154.995 44.8856 154.627 44.8599 154.587 44.5954L152.514 30.8018C152.481 30.5809 152.385 30.3744 152.238 30.2068L147.478 24.7607C146.924 24.1269 146.023 23.9362 145.264 24.2921C144.694 24.5594 144.294 25.0953 144.195 25.7218L140.195 51.2182C140.128 51.6426 139.528 51.6558 139.442 51.2346L136.94 38.8934C136.502 36.7294 133.389 36.8833 133.165 39.08C133.146 39.2623 132.91 39.3181 132.813 39.1632L126.144 28.5201C125.009 26.7092 122.281 27.1322 121.74 29.2029C121.686 29.4126 121.659 29.6286 121.66 29.8454L121.792 48.416C121.794 48.7005 121.399 48.7668 121.309 48.497L117.134 35.9472C116.183 33.0884 114.241 30.6716 111.666 29.1416L109.88 28.0808C109.404 27.7979 108.794 27.912 108.451 28.3484C107.146 30.0053 106.335 32.0023 106.111 34.1071L103.855 55.3352C103.851 55.3774 103.824 55.4141 103.786 55.4314C103.06 55.7594 102.225 55.2849 102.127 54.4878L99.5963 34.0266C99.5724 33.8333 99.493 33.6513 99.3679 33.503L94.9524 28.267C91.501 24.1742 84.9047 25.7994 83.7167 31.0352L83.5943 31.5745C83.5665 31.6973 83.4342 31.7636 83.3203 31.7118C82.1475 31.1784 80.7908 31.8976 80.5615 33.1744L74.3899 67.532C74.1575 68.8255 72.3581 68.9266 71.983 67.6672L68.7417 56.7839C67.7722 53.5286 65.5321 50.8105 62.5369 49.2548L58.1177 46.9595C57.8624 46.8269 57.6671 46.6009 57.5716 46.3278L53.0806 33.4843C52.2636 31.1477 49.2662 30.5443 47.626 32.3862L45.6256 34.6326C45.0588 35.2692 44.0339 35.1276 43.6565 34.3605L43.6309 34.3084C43.3136 33.6636 42.4981 33.4611 41.9213 33.884C41.4253 34.2477 40.7336 34.1553 40.3479 33.6738L35.1599 27.1984C34.5821 26.4773 33.4275 26.8775 33.4118 27.8044L32.853 60.7167L29.5055 31.0535C29.0845 27.3228 24.9543 25.3059 21.7965 27.2888C20.2116 28.284 19.2987 30.0791 19.4212 31.9595L20.5317 49.0087L16.4788 27.6738C16.2542 26.4915 15.4472 25.5062 14.3388 25.0609C11.9493 24.1009 9.38779 25.9869 9.5653 28.5755L9.88771 33.2769C9.93531 33.971 9.01392 34.2432 8.6823 33.6329L0.628913 18.8122C0.391518 18.3754 0.433487 17.8382 0.735762 17.4446L4.28192 12.8277Z"
                fill="#98C4E7"
              />
              <path
                d="M4.28191 12.8275C5.94002 10.6688 8.25335 9.11772 10.8684 8.41143L19.9216 5.96626C22.2349 5.34145 24.6786 5.40648 26.957 6.15346L33.3078 8.23551C35.8559 9.07091 38.6031 9.05108 41.1379 8.17901L49.6896 5.23686C52.2224 4.36547 55.0245 5.23486 56.6366 7.39222C58.2039 9.48975 60.9026 10.3759 63.3913 9.6102L75.5984 5.85443C77.9206 5.13996 80.4001 5.12962 82.729 5.82471L96.5992 9.96426C97.6505 10.278 98.7384 10.4497 99.8342 10.4749L116.014 10.846C117.926 10.8898 119.821 10.4868 121.552 9.66847L134.613 3.49386C136.106 2.78785 137.725 2.38984 139.373 2.32317L140.567 2.27486C144.09 2.13235 147.507 3.51038 149.964 6.06408L151.546 7.709C152.697 8.90574 153.6 10.3225 154.201 11.8759L160.992 29.4234C161.155 29.8458 161.08 30.3242 160.794 30.6738L158.561 33.4072C158.377 33.6327 158.059 33.6914 157.807 33.5463C154.885 31.8607 151.162 32.9523 149.594 35.9548L149.531 36.0754C149.262 36.5887 148.503 36.4736 148.395 35.9034L147.018 28.6092C146.605 26.426 144.052 25.4524 142.314 26.8154C141.534 27.4268 140.503 27.6031 139.566 27.2848L133.36 25.1752C131.926 24.6879 130.416 24.4694 128.905 24.5305L127.872 24.5723C122.808 24.7772 118.379 28.0731 116.69 32.8945L113.989 40.6068C113.852 40.9962 113.309 41.0043 113.161 40.6192L111.728 36.9016C110.847 34.6133 107.672 34.5214 106.665 36.7549C106.59 36.9194 106.383 36.9694 106.243 36.8562L104.77 35.6651C102.942 34.1864 100.314 34.2947 98.6139 35.9187L98.534 35.9951C98.4 36.1231 98.1904 36.1244 98.0546 35.998C96.3362 34.3987 93.5793 34.9066 92.5342 37.015L91.9597 38.1741C91.7991 38.4981 91.3448 38.5089 91.1689 38.1929L82.7608 23.0939C82.7556 23.0846 82.7514 23.0748 82.7481 23.0647C82.2577 21.5348 80.0894 21.6053 79.6999 23.1638L73.472 48.078C73.3431 48.5936 72.6183 48.5966 72.4845 48.0821L71.2312 43.2635C70.1014 38.9196 63.8824 39.26 63.2312 43.7014C63.173 44.0982 62.6446 44.1859 62.463 43.8289L57.1232 33.3337C55.2782 29.7074 50.8196 28.3496 47.2981 30.3414C47.022 30.4976 46.6767 30.4511 46.4506 30.2272L41.1479 24.977C39.2549 23.1027 36.2161 23.1298 34.359 25.0374L33.3981 26.0244C32.4978 26.9492 31.1058 27.1756 29.9621 26.5832L29.2335 26.2058C28.2657 25.7045 27.079 26.0469 26.521 26.9885L26.0757 27.7399C25.719 28.3419 24.9381 28.5244 24.3547 28.1421C23.5193 27.5946 22.4203 28.2259 22.4609 29.23L22.4917 29.9908C22.5421 31.2369 21.2449 32.0763 20.1431 31.5104L8.64846 25.6069C7.86335 25.2036 7.13981 24.6884 6.50013 24.0771L1.05355 18.872C0.590654 18.4296 0.535324 17.7054 0.925603 17.1972L4.28191 12.8275Z"
                fill="#D1E6F7"
              />
              <path
                d="M4.28191 12.8275C5.94002 10.6688 8.25335 9.11772 10.8684 8.41143L19.9216 5.96626C22.2349 5.34145 24.6786 5.40648 26.957 6.15346L33.3078 8.23551C35.8559 9.07091 38.6031 9.05108 41.1379 8.17901L49.6896 5.23686C52.2224 4.36547 55.0245 5.23486 56.6366 7.39222C58.2039 9.48975 60.9026 10.3759 63.3913 9.6102L75.5984 5.85443C77.9206 5.13996 80.4001 5.12962 82.729 5.82471L96.5992 9.96426C97.6505 10.278 98.7384 10.4497 99.8342 10.4749L116.014 10.846C117.926 10.8898 119.821 10.4868 121.552 9.66847L134.613 3.49386C136.106 2.78785 137.725 2.38984 139.373 2.32317L140.567 2.27486C144.09 2.13235 147.507 3.51038 149.964 6.06408L151.546 7.709C152.697 8.90574 153.6 10.3225 154.201 11.8759L159.417 25.3545C159.889 26.5734 158.425 27.6116 157.448 26.7507L150.422 20.5592C147.41 17.9047 143.1 17.3713 139.545 19.2132C137.428 20.31 134.986 20.5877 132.679 19.9941L117.584 16.1103C114.336 15.2745 110.891 15.8014 108.037 17.5707L90.9441 28.1637C90.3314 28.5435 89.5278 28.3188 89.1954 27.6748L86.7975 23.0283C83.7376 17.099 76.6014 14.6407 70.5925 17.4459L57.7392 23.4464C54.793 24.8218 51.4288 24.9753 48.3698 23.8739L38.0529 20.1594C35.8614 19.3704 33.4945 19.2194 31.2228 19.7238L13.8829 23.5738C9.86876 24.4651 5.6764 23.2899 2.69055 20.4364L1.05355 18.872C0.590654 18.4296 0.535324 17.7054 0.925603 17.1972L4.28191 12.8275Z"
                fill="white"
              />
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

      <h2 className="heading-1">
        The <span className="command-in-heading">whoami</span> Command
      </h2>
      <p className="body">
        We now know how to answer the question of where?, but what about who?
        How do we figure out, say, which account we are logged in as? The{' '}
        <span className="try-out-command">whoami</span> command displays the
        user id.
      </p>
      <h2 className="heading-1">Task 2</h2>
      <p className="body">Can you figure out Tux&#39; s username?</p>

      <h2 className="heading-1">
        The <span className="command-in-heading">man</span> command
      </h2>
      <p className="body">
        We&#39;ve seen two commands so far—pwd and whoami—but there are hundreds
        more. Luckily, you don&#39;t need to memorize what each command does.
        Instead, the <span className="try-out-command">man</span> command, short
        for “manual”, displays explanations, options, and examples for specified
        commands.
      </p>
      <h2 className="heading-1">Task 3</h2>
      <p className="body">
        Try running <span className="try-out-command">man pwd</span> or{' '}
        <span className="try-out-command">man whoami</span> in the terminal.
        What is the output?
      </p>
      <footer>
        <a href="intro">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="moving">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Stationary;
// monospace font
// left alignment
// font size
// input has black background and border
