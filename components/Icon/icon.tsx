import { FC, memo } from 'react'
import { IconProps } from './types'

export const Icon: FC<IconProps> = memo(({ name, fill, ...rest }) => {
  if (name === 'checkmark') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 14.11 10.17">
        <path
          d="M17.281,9,9.525,16.756,6,13.23"
          transform="translate(-4.586 -7.586)"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )
  }

  if (name === 'search') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24.418 24.418">
        <g transform="translate(-3.5 -3.5)">
          <path
            d="M24.058,14.279A9.779,9.779,0,1,1,14.279,4.5,9.779,9.779,0,0,1,24.058,14.279Z"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M30.3,30.3l-5.32-5.32"
            transform="translate(-3.792 -3.792)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    )
  }

  if (name === 'person') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24.418 24.418">
        <g transform="translate(1 1)">
          <path
            d="M27.9,30.713V27.975A5.475,5.475,0,0,0,22.426,22.5H11.475A5.475,5.475,0,0,0,6,27.975v2.738"
            transform="translate(-6 -6.074)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M22.951,9.975A5.475,5.475,0,1,1,17.475,4.5,5.475,5.475,0,0,1,22.951,9.975Z"
            transform="translate(-6.525 -4.5)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    )
  }

  if (name === 'cart') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 32.114 30.745">
        <g transform="translate(1 1)">
          <path
            d="M14.738,31.369A1.369,1.369,0,1,1,13.369,30,1.369,1.369,0,0,1,14.738,31.369Z"
            transform="translate(-2.418 -3.992)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M31.238,31.369A1.369,1.369,0,1,1,29.869,30,1.369,1.369,0,0,1,31.238,31.369Z"
            transform="translate(-3.861 -3.992)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M1.5,1.5H6.975l3.668,18.328a2.738,2.738,0,0,0,2.738,2.2h13.3a2.738,2.738,0,0,0,2.738-2.2l2.19-11.484H8.344"
            transform="translate(-1.5 -1.5)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    )
  }

  if (name === 'menu') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24.505 17.003">
        <g transform="translate(-3.5 -8)">
          <path
            d="M4.5,18H27"
            transform="translate(0 -1.498)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M4.5,9H27"
            transform="translate(0)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M4.5,27h15"
            transform="translate(0 -2.997)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    )
  }

  if (name === 'info') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 19 19">
        <g transform="translate(-2 -2)">
          <path
            d="M20,11.5A8.5,8.5,0,1,1,11.5,3,8.5,8.5,0,0,1,20,11.5Z"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M18,21.4V18"
            transform="translate(-6.5 -6.5)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M18,12h0"
            transform="translate(-6.5 -3.9)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    )
  }

  if (name === 'chevronRight') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 9.148 16">
        <path
          d="M14.19,17.637l6.05-6.055a1.139,1.139,0,0,1,1.615,0,1.153,1.153,0,0,1,0,1.62L15,20.062a1.141,1.141,0,0,1-1.577.033l-6.9-6.888a1.144,1.144,0,0,1,1.615-1.62Z"
          transform="translate(-11.246 22.188) rotate(-90)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'chevronDown') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 10.858 6.208">
        <path
          d="M11.619,15.583l4.106-4.109a.773.773,0,0,1,1.1,0,.782.782,0,0,1,0,1.1l-4.652,4.655a.775.775,0,0,1-1.07.023L6.414,12.577a.776.776,0,0,1,1.1-1.1Z"
          transform="translate(-6.188 -11.246)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'arrowTop') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 17.761 26.631">
        <path
          d="M24.858,11.592a1.209,1.209,0,0,0-.009,1.7l5.624,5.633H9.068a1.2,1.2,0,0,0,0,2.405h21.4L24.84,26.965a1.217,1.217,0,0,0,.009,1.7,1.2,1.2,0,0,0,1.693-.009l7.622-7.678h0a1.351,1.351,0,0,0,.25-.379,1.148,1.148,0,0,0,.092-.463,1.206,1.206,0,0,0-.342-.842l-7.622-7.678A1.178,1.178,0,0,0,24.858,11.592Z"
          transform="translate(-11.252 34.506) rotate(-90)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'arrowRight') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 19.492 13">
        <path
          d="M20.305,11.5a.885.885,0,0,0-.007,1.246l4.116,4.123H8.748a.88.88,0,0,0,0,1.76h15.66l-4.116,4.123A.891.891,0,0,0,20.3,24a.877.877,0,0,0,1.239-.007l5.579-5.619h0a.988.988,0,0,0,.183-.278.84.84,0,0,0,.068-.339.882.882,0,0,0-.251-.616l-5.579-5.619A.862.862,0,0,0,20.305,11.5Z"
          transform="translate(-7.875 -11.252)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'edit') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 17.493 17.657">
        <path
          d="M8148.091-8875.526a2.093,2.093,0,0,1-2.091-2.092v-10.693a2.093,2.093,0,0,1,2.091-2.09h5.343a.562.562,0,0,1,.563.563.563.563,0,0,1-.563.563h-5.343a.965.965,0,0,0-.964.964v10.693a.965.965,0,0,0,.964.965h10.694a.966.966,0,0,0,.961-.965v-5.351a.564.564,0,0,1,.563-.562.563.563,0,0,1,.563.563v5.351a2.094,2.094,0,0,1-2.086,2.092Zm2.656-4.75a.564.564,0,0,1-.148-.534l.764-3.056a.554.554,0,0,1,.148-.261l7.255-7.255a2.235,2.235,0,0,1,3.088,0,2.185,2.185,0,0,1,0,3.087l-7.255,7.255a.581.581,0,0,1-.263.148l-3.056.764a.53.53,0,0,1-.136.017A.563.563,0,0,1,8150.747-8880.276Zm8.816-10.309-7.144,7.145-.5,1.992,1.992-.5,7.146-7.145a1.057,1.057,0,0,0,0-1.494,1.052,1.052,0,0,0-.747-.3A1.059,1.059,0,0,0,8159.563-8890.585Z"
          transform="translate(-8145.5 8892.684)"
          fill={fill}
          stroke="rgba(0,0,0,0)"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
      </svg>
    )
  }

  if (name === 'email') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 22.127 17.507">
        <g transform="translate(-1.816 -5.15)">
          <path
            d="M4.976,6H20.783a1.982,1.982,0,0,1,1.976,1.976V19.831a1.982,1.982,0,0,1-1.976,1.976H4.976A1.982,1.982,0,0,1,3,19.831V7.976A1.982,1.982,0,0,1,4.976,6Z"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M22.759,9l-9.88,6.916L3,9"
            transform="translate(0 -1.024)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </g>
      </svg>
    )
  }

  if (name === 'phone') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 21.718 21.756">
        <path
          d="M15.511,5.316a4.77,4.77,0,0,1,3.768,3.768M15.511,1.5A8.586,8.586,0,0,1,23.1,9.075m-.954,7.613V19.55a1.908,1.908,0,0,1-2.08,1.908,18.88,18.88,0,0,1-8.233-2.929A18.6,18.6,0,0,1,6.1,12.805,18.88,18.88,0,0,1,3.176,4.534a1.908,1.908,0,0,1,1.9-2.08H7.936A1.908,1.908,0,0,1,9.844,4.095a12.249,12.249,0,0,0,.668,2.681,1.908,1.908,0,0,1-.429,2.013L8.871,10A15.264,15.264,0,0,0,14.6,15.724l1.212-1.212a1.908,1.908,0,0,1,2.013-.429,12.25,12.25,0,0,0,2.681.668A1.908,1.908,0,0,1,22.141,16.688Z"
          transform="translate(-2.317 -0.561)"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    )
  }

  if (name === 'place') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 31.006 37.34">
        <g transform="translate(-3.25 -0.25)">
          <path
            d="M33.006,15.753c0,11.086-14.253,20.587-14.253,20.587S4.5,26.838,4.5,15.753a14.253,14.253,0,1,1,28.506,0Z"
            transform="translate(0 0)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d="M23,15.251A4.751,4.751,0,1,1,18.251,10.5,4.751,4.751,0,0,1,23,15.251Z"
            transform="translate(0.502 0.502)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    )
  }

  if (name === 'stars') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 45.42 45.019">
        <path
          d="M6.444,33.257a5.556,5.556,0,0,0,3.891-1.769,5.542,5.542,0,0,0,1.6-3.962,5.722,5.722,0,0,0,5.471,5.731,5.722,5.722,0,0,0-5.471,5.731,5.446,5.446,0,0,0-1.6-3.962A5.557,5.557,0,0,0,6.444,33.257Zm5.495-16.98a10.838,10.838,0,0,0,7.57-3.467,10.8,10.8,0,0,0,3.113-7.735,10.8,10.8,0,0,0,3.113,7.735,10.945,10.945,0,0,0,7.594,3.467,10.93,10.93,0,0,0-5.4,1.674,11.333,11.333,0,0,0-3.891,4.08,11.089,11.089,0,0,0-1.415,5.495,10.849,10.849,0,0,0-3.113-7.759A10.767,10.767,0,0,0,11.939,16.278Zm7.829,25.4a8.424,8.424,0,0,0,8.042-8.419,8.426,8.426,0,0,0,8.018,8.419A8.426,8.426,0,0,0,27.81,50.1a8.121,8.121,0,0,0-2.335-5.825A8.261,8.261,0,0,0,19.768,41.676ZM35.828,30.5a8.383,8.383,0,0,0,7.995-8.443,8.424,8.424,0,0,0,8.042,8.419,8.424,8.424,0,0,0-8.042,8.419,8.341,8.341,0,0,0-7.995-8.4Z"
          transform="translate(-6.444 -5.076)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'leaf') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 35.096 37.928">
        <g data-name="Grupo 156" transform="translate(-14.863 0.554)">
          <g data-name="Grupo 155" transform="translate(15.363 0)">
            <path
              d="M47.574.5a.671.671,0,0,0-.337-.419h0a.671.671,0,0,0-.907.279v0c0,.019-3.4,6.611-13.83,7.76a13.255,13.255,0,0,0-3.943,1.052A10.954,10.954,0,0,0,23.3,13.99,11.322,11.322,0,0,0,22,20.586a11.087,11.087,0,0,0,1.623,4.677c-1.853,1.33-7.73,5.929-8.26,10.865a.671.671,0,0,0,1.334.141c.485-4.406,6-8.679,7.719-9.917a11.872,11.872,0,0,0,8.471,4.2,14.323,14.323,0,0,0,6.526-1.112,14.968,14.968,0,0,0,5.751-4.273C49.146,20.349,51.039,12.252,47.574.5ZM24.806,24.6h0a9.641,9.641,0,0,1-.674-1.26,9.783,9.783,0,0,1-.778-2.9,9.976,9.976,0,0,1,1.112-5.818A9.635,9.635,0,0,1,29.1,10.388a11.932,11.932,0,0,1,3.55-.93c6.885-.741,10.936-3.806,13.026-6.029a28.416,28.416,0,0,1-6.189,10.884l-.408-4.106a.671.671,0,0,0-1.339.075c0,.018,0,.037.005.055l.523,5.277A42.929,42.929,0,0,1,24.806,24.6Zm19.326-.293v0A13.627,13.627,0,0,1,38.9,28.216a12.971,12.971,0,0,1-5.929.993A10.6,10.6,0,0,1,25.614,25.7a50.51,50.51,0,0,0,6.4-3.4L37.9,23.413a.671.671,0,0,0,.241-1.319l-4.525-.856a39.115,39.115,0,0,0,5.807-4.881.678.678,0,0,0,.089-.093,30.26,30.26,0,0,0,7.5-12.652C49.3,13.382,47.545,20.178,44.132,24.306Z"
              transform="translate(-15.363 0)"
              fill={fill}
              stroke={fill}
              strokeWidth="1"
            />
          </g>
        </g>
      </svg>
    )
  }

  if (name === 'intersection') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 38.694 35.774">
        <path
          d="M39.415,21.458a11.524,11.524,0,0,0-5.667-3.979,11.123,11.123,0,0,0,.128-1.743A11.458,11.458,0,0,0,30.527,7.6a11.369,11.369,0,0,0-16.171,0,11.458,11.458,0,0,0-3.349,8.14,12.345,12.345,0,0,0,.128,1.743A11.55,11.55,0,0,0,6.443,36.616a11.383,11.383,0,0,0,16,.183,11.383,11.383,0,0,0,16-.183,11.566,11.566,0,0,0,.976-15.158ZM22.441,6.546a9.172,9.172,0,0,1,9.126,9.19,8.717,8.717,0,0,1-.091,1.287c-.374-.037-.748-.055-1.132-.055a11.332,11.332,0,0,0-7.912,3.194,11.316,11.316,0,0,0-7.912-3.194c-.374,0-.757.018-1.132.055a10.047,10.047,0,0,1-.091-1.287A9.194,9.194,0,0,1,22.441,6.546Zm0,18.38c-.164,0-.338-.009-.5-.018a8.705,8.705,0,0,1,.5-1.013,8.705,8.705,0,0,1,.5,1.013A4.613,4.613,0,0,1,22.441,24.926ZM18.188,36.9a8.982,8.982,0,0,1-3.66.767,9.2,9.2,0,0,1-2.82-17.933,11.569,11.569,0,0,0,2.847,4.344,11.361,11.361,0,0,0,4.49,2.656,11.123,11.123,0,0,0-.128,1.743,11.505,11.505,0,0,0,2.026,6.543A9.3,9.3,0,0,1,18.188,36.9Zm1.433-12.421A9.176,9.176,0,0,1,14.027,19.3c.164-.009.338-.018.5-.018a9.014,9.014,0,0,1,3.66.767,9.14,9.14,0,0,1,2.747,1.88A11.6,11.6,0,0,0,19.621,24.479Zm2.82,8.578a9.22,9.22,0,0,1-1.214-4.581,8.717,8.717,0,0,1,.091-1.287c.374.037.748.055,1.132.055s.757-.018,1.132-.055a10.047,10.047,0,0,1,.091,1.287A9.432,9.432,0,0,1,22.441,33.057Zm4.253-13a8.982,8.982,0,0,1,3.66-.767c.164,0,.338.009.5.018a9.176,9.176,0,0,1-5.594,5.174,11.811,11.811,0,0,0-1.314-2.546A9.14,9.14,0,0,1,26.694,20.052Zm3.66,17.613a9.014,9.014,0,0,1-3.66-.767,9.14,9.14,0,0,1-2.747-1.88,11.484,11.484,0,0,0,2.026-6.543,12.345,12.345,0,0,0-.128-1.743,11.425,11.425,0,0,0,4.49-2.656,11.718,11.718,0,0,0,2.847-4.344,9.2,9.2,0,0,1-2.829,17.933Z"
          transform="translate(-3.094 -4.219)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'paypal') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 566.93 137.35">
        <path
          className="cls-1"
          fill="#009ee3"
          d="M192.95,386.87h38.74c20.8,0,28.63,10.53,27.42,26-2,25.54-17.44,39.67-37.92,39.67H210.85c-2.81,0-4.7,1.86-5.46,6.9L201,488.74c-0.29,1.9-1.29,3-2.79,3.15H173.87c-2.29,0-3.1-1.75-2.5-5.54l14.84-93.93C186.79,388.66,188.85,386.87,192.95,386.87Z"
          transform="translate(-143.48 -354.54)"
        />
        <path
          className="cls-2"
          fill="#113984"
          d="M361.14,385.13c13.07,0,25.13,7.09,23.48,24.76-2,21-13.25,32.62-31,32.67H338.11c-2.23,0-3.31,1.82-3.89,5.55l-3,19.07c-0.45,2.88-1.93,4.3-4.11,4.3H312.68c-2.3,0-3.1-1.47-2.59-4.76L322,390.29c0.59-3.76,2-5.16,4.57-5.16h34.54Zm-23.5,40.92h11.75c7.35-.28,12.23-5.37,12.72-14.55,0.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79,24.2h0Zm86.21,39.58c1.32-1.2,2.66-1.82,2.47-.34l-0.47,3.54c-0.24,1.85.49,2.83,2.21,2.83h12.82c2.16,0,3.21-.87,3.74-4.21l7.9-49.58c0.4-2.49-.21-3.71-2.1-3.71H436.32c-1.27,0-1.89.71-2.22,2.65l-0.52,3.05c-0.27,1.59-1,1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1,15.42-34.53,34.66-1.1,14.88,9.56,26.57,23.62,26.57,10.2,0,14.76-3,19.9-7.7h0ZM413.11,458c-8.51,0-14.44-6.79-13.21-15.11s9.19-15.11,17.7-15.11,14.44,6.79,13.21,15.11S421.63,458,413.11,458h0Zm64.5-44h-13c-2.68,0-3.77,2-2.92,4.46l16.14,47.26L462,488.21c-1.33,1.88-.3,3.59,1.57,3.59h14.61a4.47,4.47,0,0,0,4.34-2.13l49.64-71.2c1.53-2.19.81-4.49-1.7-4.49H516.63c-2.37,0-3.32.94-4.68,2.91l-20.7,30L482,416.82C481.46,415,480.11,414,477.62,414Z"
          transform="translate(-143.48 -354.54)"
        />
        <path
          className="cls-1"
          fill="#009ee3"
          d="M583.8,385.13c13.07,0,25.13,7.09,23.48,24.76-2,21-13.25,32.62-31,32.67H560.78c-2.23,0-3.31,1.82-3.89,5.55l-3,19.07c-0.45,2.88-1.93,4.3-4.11,4.3H535.35c-2.3,0-3.1-1.47-2.59-4.76l11.93-76.45c0.59-3.76,2-5.16,4.57-5.16H583.8Zm-23.5,40.92h11.75c7.35-.28,12.23-5.37,12.72-14.55,0.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79,24.2h0Zm86.21,39.58c1.32-1.2,2.66-1.82,2.47-.34l-0.47,3.54c-0.24,1.85.49,2.83,2.21,2.83h12.82c2.16,0,3.21-.87,3.74-4.21l7.9-49.58c0.4-2.49-.21-3.71-2.1-3.71H659c-1.27,0-1.89.71-2.22,2.65l-0.52,3.05c-0.27,1.59-1,1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1,15.42-34.53,34.66-1.1,14.88,9.56,26.57,23.62,26.57,10.2,0,14.76-3,19.9-7.7h0ZM635.78,458c-8.51,0-14.44-6.79-13.21-15.11s9.19-15.11,17.7-15.11,14.44,6.79,13.21,15.11S644.29,458,635.78,458h0Zm59.13,13.74h-14.8a1.75,1.75,0,0,1-1.81-2l13-82.36a2.55,2.55,0,0,1,2.46-2h14.8a1.75,1.75,0,0,1,1.81,2l-13,82.36A2.55,2.55,0,0,1,694.91,471.76Z"
          transform="translate(-143.48 -354.54)"
        />
        <path
          className="cls-2"
          fill="#113984"
          d="M168.72,354.54h38.78c10.92,0,23.88.35,32.54,8,5.79,5.11,8.83,13.24,8.13,22-2.38,29.61-20.09,46.2-43.85,46.2H185.2c-3.26,0-5.41,2.16-6.33,8l-5.34,34c-0.35,2.2-1.3,3.5-3,3.66H146.6c-2.65,0-3.59-2-2.9-6.42L160.9,361C161.59,356.62,164,354.54,168.72,354.54Z"
          transform="translate(-143.48 -354.54)"
        />
        <path
          className="cls-3"
          fill="#172c70"
          d="M179.43,435.29l6.77-42.87c0.59-3.76,2.65-5.56,6.75-5.56h38.74c6.41,0,11.6,1,15.66,2.85-3.89,26.36-20.94,41-43.26,41H185C182.44,430.72,180.56,432,179.43,435.29Z"
          transform="translate(-143.48 -354.54)"
        />
      </svg>
    )
  }

  if (name === 'visa') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 44.8 14.468">
        <path
          d="M695.1,439.473l-2.993,13.994h-3.62l2.994-13.994Zm15.231,9.036,1.906-5.255,1.1,5.255Zm4.039,4.958h3.348L714.8,439.473h-3.091a1.649,1.649,0,0,0-1.541,1.027l-5.431,12.967h3.8l.755-2.09h4.645Zm-9.447-4.569c.015-3.694-5.108-3.9-5.073-5.547.011-.5.489-1.036,1.535-1.173a6.834,6.834,0,0,1,3.57.627l.635-2.967a9.71,9.71,0,0,0-3.386-.621c-3.578,0-6.1,1.9-6.118,4.626-.022,2.015,1.8,3.138,3.17,3.808,1.41.686,1.884,1.125,1.878,1.739-.009.939-1.125,1.353-2.166,1.369a7.569,7.569,0,0,1-3.719-.883l-.656,3.066a10.961,10.961,0,0,0,4.026.743c3.8,0,6.291-1.879,6.3-4.788m-14.994-9.425-5.865,13.994h-3.827L677.35,442.3a1.533,1.533,0,0,0-.861-1.229,15.122,15.122,0,0,0-3.571-1.19l.086-.407h6.159a1.686,1.686,0,0,1,1.669,1.427l1.525,8.1,3.767-9.525Z"
          transform="translate(-672.918 -439.217)"
          fill="#1a1f70"
        />
      </svg>
    )
  }

  if (name === 'mastercard') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 34.038 21.038">
        <g transform="translate(-4.428 -4.428)">
          <g transform="translate(4.428 4.428)">
            <g>
              <rect width="9.204" height="16.54" transform="translate(12.418 2.249)" fill="#ff5f00" />
              <path
                d="M28.155,25.675a10.5,10.5,0,0,1,4.018-8.27,10.519,10.519,0,1,0,0,16.54A10.5,10.5,0,0,1,28.155,25.675Z"
                transform="translate(-15.153 -15.156)"
                fill="#eb001b"
              />
              <path
                d="M90.42,25.675A10.518,10.518,0,0,1,73.4,33.945a10.521,10.521,0,0,0,0-16.54,10.518,10.518,0,0,1,17.018,8.27Z"
                transform="translate(-56.382 -15.156)"
                fill="#f79e1b"
              />
              <path
                d="M127.7,72.475v-.339h.136v-.069h-.348v.069h.136v.339Zm.675,0v-.408h-.107l-.122.281-.123-.281h-.107v.408h.075v-.308l.115.266h.078l.115-.266v.309Z"
                transform="translate(-94.666 -55.438)"
                fill="#f79e1b"
              />
            </g>
          </g>
        </g>
      </svg>
    )
  }

  if (name === 'klarma') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 64.4 36">
        <defs>
          <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 135 75">
            <image
              width="135"
              height="75"
              xlinkHref="data:image/png;base64,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"
            />
          </pattern>
        </defs>
        <rect id="klarna" width="64.4" height="36" fill="url(#pattern)" />
      </svg>
    )
  }

  if (name === 'amex') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 29.022 29.022">
        <path
          id="Caminho_15"
          data-name="Caminho 15"
          d="M128.022,130.022v-4.6h-3.5l-1.8-1.993-1.812,1.993H109.362v-9.29h-3.726l4.622-10.459h4.457l1.591,3.583v-3.583h5.517l.958,2.7.964-2.7h4.277V101H99v29.022Zm-2.911-5.762h2.911l-3.851-4.084,3.851-4.038h-2.865l-2.378,2.6-2.356-2.6h-2.912l3.829,4.061-3.829,4.061h2.831l2.39-2.622,2.379,2.622Zm.681-4.081,2.23,2.373v-4.726l-2.23,2.353Zm-12.98,2.2v-1.265h4.583v-1.833h-4.583v-1.265h4.7v-1.88H110.6v8.122h6.915v-1.88Zm13.018-7.421h2.193v-8.122h-3.411l-1.822,5.059-1.81-5.059H117.51v8.122H119.7v-5.685l2.089,5.685h1.949l2.089-5.7v5.7Zm-10.814,0h2.495l-3.585-8.122H111.07l-3.585,8.122h2.437l.673-1.624h3.736l.685,1.624Zm-1.45-3.446h-2.2l1.1-2.657,1.1,2.657Z"
          transform="translate(-99 -101)"
          fill="#006fcf"
        />
      </svg>
    )
  }

  if (name === 'rechnung') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 56 13">
        <text
          id="Rechnung"
          transform="translate(28 10)"
          fill="#00263e"
          fontSize="11"
          fontFamily="Rubik-Medium, Rubik"
          fontWeight="500"
        >
          <tspan x="-27.11" y="0">
            Rechnung
          </tspan>
        </text>
      </svg>
    )
  }

  if (name === 'vorkasse') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 50 13">
        <text
          id="Vorkasse"
          transform="translate(25 10)"
          fill="#00263e"
          fontSize="11"
          fontFamily="Rubik-Medium, Rubik"
          fontWeight="500"
        >
          <tspan x="-24.101" y="0">
            Vorkasse
          </tspan>
        </text>
      </svg>
    )
  }

  if (name === 'facebook') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 14.786 27.607">
        <path
          d="M15.427,15.529l.767-5H11.4V7.291a2.5,2.5,0,0,1,2.817-2.7H16.4V.338A26.578,26.578,0,0,0,12.527,0C8.579,0,6,2.393,6,6.725v3.808H1.609v5H6V27.607h5.4V15.529Z"
          transform="translate(-1.609)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24.17 24.165">
        <path
          d="M12.082,8.124a6.2,6.2,0,1,0,6.2,6.2A6.186,6.186,0,0,0,12.082,8.124Zm0,10.223A4.028,4.028,0,1,1,16.11,14.32a4.035,4.035,0,0,1-4.028,4.028ZM19.976,7.871a1.445,1.445,0,1,1-1.445-1.445A1.442,1.442,0,0,1,19.976,7.871Zm4.1,1.467a7.151,7.151,0,0,0-1.952-5.063,7.2,7.2,0,0,0-5.063-1.952c-2-.113-7.975-.113-9.97,0A7.188,7.188,0,0,0,2.032,4.269,7.175,7.175,0,0,0,.08,9.332c-.113,2-.113,7.975,0,9.97a7.151,7.151,0,0,0,1.952,5.063,7.207,7.207,0,0,0,5.063,1.952c2,.113,7.975.113,9.97,0a7.151,7.151,0,0,0,5.063-1.952A7.2,7.2,0,0,0,24.08,19.3c.113-2,.113-7.969,0-9.965ZM21.5,21.443a4.078,4.078,0,0,1-2.3,2.3c-1.591.631-5.365.485-7.123.485s-5.538.14-7.123-.485a4.078,4.078,0,0,1-2.3-2.3c-.631-1.591-.485-5.365-.485-7.123s-.14-5.538.485-7.123a4.078,4.078,0,0,1,2.3-2.3c1.591-.631,5.365-.485,7.123-.485s5.538-.14,7.123.485a4.078,4.078,0,0,1,2.3,2.3c.631,1.591.485,5.365.485,7.123S22.133,19.858,21.5,21.443Z"
          transform="translate(0.005 -2.238)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'youtube') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 29.448 20.706">
        <path
          d="M29.883,7.74a3.7,3.7,0,0,0-2.6-2.62C24.983,4.5,15.774,4.5,15.774,4.5s-9.209,0-11.505.619a3.7,3.7,0,0,0-2.6,2.62,38.816,38.816,0,0,0-.615,7.134,38.816,38.816,0,0,0,.615,7.134,3.645,3.645,0,0,0,2.6,2.579c2.3.619,11.505.619,11.505.619s9.209,0,11.505-.619a3.645,3.645,0,0,0,2.6-2.579,38.816,38.816,0,0,0,.615-7.134,38.816,38.816,0,0,0-.615-7.134ZM12.762,19.252V10.5l7.7,4.379-7.7,4.378Z"
          transform="translate(-1.05 -4.5)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24.156 24.156">
        <path
          d="M5.407,24.157H.4V8.029H5.407ZM2.9,5.829A2.914,2.914,0,1,1,5.8,2.9,2.925,2.925,0,0,1,2.9,5.829ZM24.151,24.157h-5V16.306c0-1.871-.038-4.271-2.6-4.271-2.6,0-3,2.033-3,4.136v7.986h-5V8.029h4.8v2.2h.07a5.262,5.262,0,0,1,4.739-2.6c5.069,0,6,3.338,6,7.673v8.859Z"
          transform="translate(0 -0.001)"
          fill={fill}
        />
      </svg>
    )
  }

  if (name === 'beer') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 30.289 76.002">
        <g transform="translate(0.5 0.5)">
          <g transform="translate(0)" opacity="0.5">
            <g>
              <path
                d="M181.722,28.862a9.389,9.389,0,0,1-2.643-7.929,15.426,15.426,0,0,0-.861-7.674l-1.759-4.6a1.464,1.464,0,0,0,.864-1.335V3.809A3.813,3.813,0,0,0,173.515,0h-5.681a3.813,3.813,0,0,0-3.809,3.809V7.324a1.464,1.464,0,0,0,.862,1.334l-1.759,4.6a15.426,15.426,0,0,0-.861,7.674,9.389,9.389,0,0,1-2.643,7.929,12.2,12.2,0,0,0-3.6,8.679V67.678A7.333,7.333,0,0,0,163.352,75h14.641a7.333,7.333,0,0,0,7.324-7.324V37.542a12.194,12.194,0,0,0-3.595-8.679ZM166.954,3.809a.88.88,0,0,1,.879-.879h5.681a.88.88,0,0,1,.879.879V5.86h-7.439Zm-1.9,15.454a12.5,12.5,0,0,1,.81-4.957l2.11-5.516h5.4l2.11,5.516a12.5,12.5,0,0,1,.81,4.96l-.161,4.3a12.336,12.336,0,0,0,3.519,7.364,9.283,9.283,0,0,1,2.737,6.608V67.678a4.4,4.4,0,0,1-4.395,4.395H163.353a4.4,4.4,0,0,1-4.395-4.395V37.542a9.284,9.284,0,0,1,2.737-6.608,12.335,12.335,0,0,0,3.519-7.367Z"
                transform="translate(-156.028)"
                fill="#fff"
                stroke="#009bc9"
                strokeWidth="1"
              />
            </g>
          </g>
          <ellipse cx="10.777" cy="13.642" rx="10.777" ry="13.642" transform="translate(3.869 38.638)" fill="#fff" />
          <g transform="translate(8.097 47.747)">
            <rect width="13.096" height="2.015" rx="1" transform="translate(0)" fill="#008fbe" />
            <rect width="8.059" height="2.015" rx="1" transform="translate(2.519 4.03)" fill="#008fbe" />
            <rect width="10.074" height="2.015" rx="1" transform="translate(1.511 8.059)" fill="#008fbe" />
          </g>
        </g>
      </svg>
    )
  }

  if (name === 'food') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 43.231 58.951">
        <path
          d="M104.283,9.825a2.951,2.951,0,0,0,2.948-2.948V2.948A2.951,2.951,0,0,0,104.283,0H66.947A2.951,2.951,0,0,0,64,2.948v3.93a2.951,2.951,0,0,0,2.948,2.948h1.965v3.523L64.863,17.4A2.928,2.928,0,0,0,64,19.482v32.76a2.928,2.928,0,0,0,.864,2.085l3.761,3.761a2.928,2.928,0,0,0,2.085.864h29.812a2.928,2.928,0,0,0,2.085-.864l3.761-3.761a2.928,2.928,0,0,0,.864-2.085V19.482a2.928,2.928,0,0,0-.864-2.085l-4.049-4.049V9.825ZM65.965,6.878V2.948a.984.984,0,0,1,.983-.983h37.336a.984.984,0,0,1,.983.983v3.93a.984.984,0,0,1-.983.983H66.947A.984.984,0,0,1,65.965,6.878Zm39.3,44.213v1.151a.977.977,0,0,1-.288.7L101.217,56.7a.978.978,0,0,1-.7.288H70.709a.979.979,0,0,1-.7-.288l-3.761-3.761a.979.979,0,0,1-.288-.7V19.482a.979.979,0,0,1,.288-.7L70.3,14.738h30.627l4.049,4.049a.977.977,0,0,1,.288.7V51.091Zm-4.913-38.318H70.878V9.825h29.476Z"
          transform="translate(-64)"
          fill="#fff"
          opacity="0.5"
        />
        <rect width="43.231" height="22.414" transform="translate(0 26.514)" fill="#fff" />
        <g transform="translate(15.88 33.309)">
          <rect width="11.471" height="1.765" rx="0.882" transform="translate(0 0)" fill="#7bcaff" />
          <rect width="7.059" height="1.765" rx="0.882" transform="translate(2.206 3.529)" fill="#7bcaff" />
          <rect width="8.824" height="1.765" rx="0.882" transform="translate(1.324 7.059)" fill="#7bcaff" />
        </g>
      </svg>
    )
  }

  if (name === 'spice') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="50.57" height="61.646" viewBox="0 0 50.57 61.646">
        <g transform="translate(0)" opacity="0.5">
          <g transform="translate(0)">
            <path
              d="M96.556,55.014C96.53,54.832,94,36.768,94,30.823S96.53,6.813,96.556,6.631l.009-.066V0L92.129,1.634,88.653.354l-3.475,1.28L81.7.354l-3.475,1.28L74.752.354l-3.475,1.28L67.8.354l-3.474,1.28L60.854.354l-3.475,1.28L53.9.354,50.43,1.634,45.995,0V6.565L46,6.632c.026.182,2.551,18.246,2.551,24.191S46.03,54.832,46,55.014l-.009.066v6.565l4.435-1.634,3.475,1.28,3.475-1.28,3.475,1.28,3.475-1.28,3.474,1.28,3.475-1.28,3.475,1.28,3.475-1.28,3.475,1.28,3.475-1.28,3.475,1.28,3.476-1.28,4.436,1.634V55.081ZM47.916,2.754l2.514.926L53.9,2.4l3.475,1.28L60.854,2.4l3.475,1.28L67.8,2.4l3.475,1.28L74.752,2.4l3.475,1.28L81.7,2.4l3.475,1.28L88.653,2.4l3.476,1.28,2.516-.926V5.538H47.916Zm2.56,28.069c0-5.285-1.863-19.3-2.419-23.365H94.5c-.555,4.061-2.419,18.079-2.419,23.365s1.863,19.3,2.419,23.365H48.057C48.613,50.126,50.476,36.108,50.476,30.823ZM94.644,58.892l-2.516-.926-3.476,1.28-3.475-1.28L81.7,59.245l-3.475-1.28-3.475,1.28-3.475-1.28L67.8,59.245l-3.474-1.28-3.475,1.28-3.475-1.28L53.9,59.245l-3.475-1.28-2.514.926V56.108H94.645v2.784Z"
              transform="translate(-45.995)"
              fill="#fff"
            />
          </g>
        </g>
        <rect width="23.96" height="15.532" rx="2" transform="translate(13.305 28.161)" fill="#fff" />
        <g transform="translate(19.217 31.29)">
          <rect width="12.136" height="1.867" rx="0.934" transform="translate(0 0)" fill="#005f7f" />
          <rect width="7.468" height="1.867" rx="0.934" transform="translate(0 3.734)" fill="#005f7f" />
          <rect width="9.335" height="1.867" rx="0.934" transform="translate(0 7.468)" fill="#005f7f" />
        </g>
      </svg>
    )
  }

  return null
})

Icon.displayName = 'Icon'
