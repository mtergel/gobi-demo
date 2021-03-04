import { Icon, IconProps } from "@chakra-ui/react";

const LogoMobile: React.FC<IconProps> = ({ fontSize = "6xl", ...rest }) => {
  return (
    <Icon viewBox="0 0 67 33" fill="none" fontSize={fontSize} {...rest}>
      <path
        fill="currentColor"
        d="M15.608 10.934v5.61c0 2.217-.69 4.031-2.07 5.441-1.45 1.482-3.34 2.223-5.67 2.223s-4.22-.741-5.671-2.223c-1.38-1.41-2.07-3.224-2.07-5.44v-8.43c0-2.218.69-4.032 2.07-5.442C3.647 1.191 5.538.451 7.867.451c2.412 0 4.303.74 5.672 2.222 1.38 1.482 2.07 3.193 2.07 5.135l-2.913 1.38h-.153V8.113c0-1.37-.368-2.478-1.104-3.326-.91-1.052-2.1-1.579-3.571-1.579-1.472 0-2.662.527-3.571 1.58-.736.847-1.104 1.956-1.104 3.325v8.43c0 1.37.368 2.478 1.104 3.326.91 1.053 2.1 1.579 3.57 1.579 1.472 0 2.663-.526 3.572-1.579.736-.848 1.104-1.855 1.104-3.02v-3.126H7.209v-.153l1.241-2.637h7.158zM24.177 16.544c0 1.37.367 2.478 1.103 3.326.91 1.053 2.1 1.579 3.571 1.579 1.472 0 2.662-.526 3.572-1.579.735-.848 1.103-1.957 1.103-3.326v-8.43c0-1.37-.368-2.478-1.103-3.326-.91-1.052-2.1-1.579-3.572-1.579-1.471 0-2.661.527-3.57 1.58-.736.847-1.104 1.956-1.104 3.325v8.43zm-3.066 0v-8.43c0-2.217.69-4.03 2.07-5.441C24.63 1.191 26.52.451 28.85.451s4.22.74 5.671 2.222c1.38 1.4 2.07 3.214 2.07 5.441v8.43c0 2.217-.69 4.031-2.07 5.441-1.45 1.482-3.34 2.223-5.67 2.223s-4.22-.741-5.672-2.223c-1.38-1.41-2.069-3.224-2.069-5.44zM45.16 21.142h4.368c1.543 0 2.77-.485 3.679-1.456.664-.705.996-1.635.996-2.79 0-1.195-.352-2.201-1.058-3.019-.766-.94-1.972-1.41-3.617-1.41H45.16v8.675zm0-11.434h4.368c1.022 0 1.845-.332 2.468-.996.552-.593.828-1.364.828-2.314 0-.777-.332-1.477-.997-2.1-.592-.521-1.359-.782-2.299-.782H45.16v6.192zm-3.065 14.193V1.523l1.624-.766h5.81c1.726 0 3.162.47 4.306 1.41 1.36 1.104 2.039 2.519 2.039 4.246 0 1.757-.777 3.219-2.33 4.383.5.215.996.537 1.487.966 1.492 1.359 2.238 3.045 2.238 5.058 0 2.023-.654 3.684-1.962 4.981-1.4 1.4-3.326 2.1-5.779 2.1h-7.433zM62.465 24.514V1.524l2.912-1.38h.154v22.99l-2.913 1.38h-.153zM1.033 30.047c0 .298.038.555.112.771.074.217.171.397.29.54.12.14.256.244.407.312.152.068.306.102.46.102a.977.977 0 00.437-.096c.13-.066.244-.152.341-.257.1-.107.18-.23.245-.365.064-.137.11-.277.139-.421h.74c-.046.243-.12.471-.226.684a1.963 1.963 0 01-.396.554c-.16.157-.346.28-.56.372a1.864 1.864 0 01-.72.133 2.13 2.13 0 01-.826-.155 1.714 1.714 0 01-.628-.458 2.115 2.115 0 01-.403-.734 3.224 3.224 0 01-.08-1.545c.041-.184.1-.357.176-.52.077-.163.171-.313.285-.45a1.892 1.892 0 01.882-.59c.182-.056.378-.084.589-.084.268 0 .507.038.718.114.21.077.395.183.554.32.161.133.295.293.403.48.11.185.196.388.26.61H3.47c-.11-.31-.26-.54-.452-.691-.192-.153-.432-.23-.721-.23-.186 0-.356.044-.511.13-.155.085-.288.2-.4.347a1.638 1.638 0 00-.26.508c-.062.194-.093.4-.093.62zM7.438 27.948l1.579 4.32h-.759l-.47-1.264H6.232c-.072.209-.149.42-.229.635-.078.212-.154.422-.226.628h-.762l1.58-4.319h.841zm-.425.907l-.55 1.536h1.095l-.545-1.536zM10.628 30.76c.008.146.037.281.086.405.052.122.12.227.202.316a.917.917 0 00.294.207.93.93 0 00.368.072c.118 0 .23-.013.338-.038a.884.884 0 00.285-.117.626.626 0 00.198-.217.684.684 0 00.074-.331.43.43 0 00-.108-.297.894.894 0 00-.279-.208 2.532 2.532 0 00-.396-.16l-.455-.153a5.99 5.99 0 01-.452-.173 1.726 1.726 0 01-.397-.241 1.153 1.153 0 01-.281-.341 1.004 1.004 0 01-.106-.477c0-.19.037-.357.112-.502.074-.146.178-.268.312-.365.137-.099.298-.173.483-.223.186-.051.39-.077.614-.077.198 0 .373.02.526.062.152.039.286.093.4.16.115.069.212.15.29.242.079.093.143.192.192.298.052.103.09.211.115.325.025.111.041.22.05.328h-.74a1.018 1.018 0 00-.094-.36.765.765 0 00-.182-.25.677.677 0 00-.254-.146.918.918 0 00-.303-.05c-.098 0-.194.011-.288.032a.81.81 0 00-.251.093.518.518 0 00-.18.173.47.47 0 00-.068.26c0 .12.035.22.105.303.073.081.167.152.282.214.116.062.248.118.396.167.149.048.3.098.452.152.155.052.307.11.456.177.148.064.28.142.396.235.115.093.208.204.278.334a.95.95 0 01.109.468c0 .219-.041.41-.124.576-.08.163-.193.3-.338.411-.144.11-.316.192-.516.248a2.397 2.397 0 01-.65.084 1.791 1.791 0 01-1.162-.43 1.672 1.672 0 01-.384-.512 1.622 1.622 0 01-.154-.675h.749zM15.075 27.948v1.784h1.95v-1.784h.738v4.32h-.737v-1.936h-1.95v1.935h-.732v-4.319h.731zM19.993 27.948l1.208 3.387 1.235-3.387h.817v4.32h-.727v-2.855l-.997 2.854h-.616l-1.013-2.86v2.86h-.73v-4.319h.823zM27.725 27.948v.616h-2.319v1.168h2.174v.622h-2.174v1.285h2.421v.628h-3.151v-4.319h3.05zM32.29 29.218c0 .188-.05.365-.148.532-.1.165-.25.309-.45.43.098.034.18.081.248.143a.848.848 0 01.26.458c.021.089.031.177.031.263v.62c0 .08.02.173.06.278.038.105.091.214.157.325h-.799a.91.91 0 01-.12-.31c-.01-.05-.018-.1-.022-.145a2.791 2.791 0 01-.003-.12v-.66a.545.545 0 00-.136-.36.502.502 0 00-.19-.123.732.732 0 00-.284-.05h-1.102v1.768h-.731v-4.319h1.833c.223 0 .42.037.594.112.174.074.32.171.437.29.12.12.21.257.272.41.062.15.093.303.093.458zm-2.498.665h1.102a.678.678 0 00.461-.18.618.618 0 00.146-.207.66.66 0 00.052-.266.688.688 0 00-.05-.263.597.597 0 00-.139-.21.651.651 0 00-.47-.192h-1.102v1.318zM36.713 27.948v.616h-2.32v1.168h2.174v.622h-2.173v1.285h2.42v.628h-3.15v-4.319h3.049zM42.796 27.948v.616h-2.25v1.168h1.95v.622h-1.95v1.913h-.731v-4.319h2.981zM47.77 30.1c0 .334-.045.64-.133.92-.09.278-.22.519-.39.721-.17.2-.38.356-.63.468-.249.111-.534.167-.854.167-.317 0-.6-.056-.848-.167a1.745 1.745 0 01-.625-.468 2.108 2.108 0 01-.387-.721c-.087-.281-.13-.59-.13-.926 0-.335.043-.64.13-.917.088-.276.217-.514.387-.712.169-.198.377-.352.625-.461.248-.11.53-.164.848-.164.32 0 .605.055.855.164.25.11.46.264.628.464.172.198.302.437.39.716.09.276.134.582.134.916zm-.737-.006c0-.262-.033-.495-.1-.697a1.517 1.517 0 00-.269-.517 1.137 1.137 0 00-.901-.43 1.124 1.124 0 00-.898.43 1.55 1.55 0 00-.266.517 2.313 2.313 0 00-.096.697c0 .26.032.493.096.7.064.206.153.381.267.526.113.142.246.252.399.328.153.074.319.112.498.112.178 0 .344-.038.499-.112.155-.076.289-.186.402-.328.116-.145.206-.32.27-.526.066-.207.099-.44.099-.7zM52.174 29.218c0 .188-.05.365-.149.532-.1.165-.249.309-.449.43.097.034.18.081.248.143a.85.85 0 01.26.458c.02.089.03.177.03.263v.62c0 .08.02.173.06.278.039.105.092.214.157.325h-.798a.91.91 0 01-.121-.31c-.01-.05-.018-.1-.022-.145a2.791 2.791 0 01-.003-.12v-.66a.545.545 0 00-.136-.36.5.5 0 00-.189-.123.732.732 0 00-.285-.05h-1.102v1.768h-.73v-4.319h1.832c.223 0 .421.037.595.112.173.074.319.171.436.29.12.12.21.257.273.41.062.15.093.303.093.458zm-2.499.665h1.102a.679.679 0 00.462-.18.618.618 0 00.145-.207.66.66 0 00.053-.266.688.688 0 00-.05-.263.597.597 0 00-.14-.21.651.651 0 00-.47-.192h-1.102v1.318zM57.461 27.948l1.58 4.32h-.76l-.47-1.264h-1.554c-.072.209-.149.42-.23.635-.078.212-.153.422-.225.628h-.762l1.58-4.319h.841zm-.424.907l-.551 1.536h1.096l-.545-1.536zM60.912 27.948v3.69h2.077v.63h-2.808v-4.32h.73zM64.82 27.948v3.69h2.078v.63h-2.809v-4.32h.731z"
      ></path>
    </Icon>
  );
};
export default LogoMobile;