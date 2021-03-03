import { Icon, IconProps } from "@chakra-ui/react";

const LogoDesktop: React.FC<IconProps> = ({ fontSize = "8xl", ...rest }) => {
  return (
    <Icon viewBox="0 0 88 43" fill="none" fontSize={fontSize} {...rest}>
      <path
        fill="currentColor"
        d="M20.49 14.103v7.31c0 2.89-.899 5.253-2.696 7.09-1.891 1.931-4.354 2.896-7.39 2.896-3.036 0-5.5-.965-7.39-2.896-1.797-1.837-2.696-4.2-2.696-7.09V10.428c0-2.889.899-5.252 2.696-7.09 1.89-1.93 4.354-2.896 7.39-2.896 3.142 0 5.605.966 7.39 2.896C19.59 5.27 20.49 7.5 20.49 10.03l-3.795 1.798h-.2v-1.399c0-1.784-.479-3.228-1.438-4.333-1.185-1.372-2.736-2.058-4.653-2.058-1.918 0-3.469.686-4.654 2.058-.958 1.105-1.438 2.55-1.438 4.333v10.985c0 1.784.48 3.229 1.438 4.334 1.185 1.372 2.736 2.057 4.654 2.057 1.917 0 3.468-.685 4.653-2.057.959-1.105 1.438-2.416 1.438-3.934v-4.075h-6.95v-.2l1.618-3.435h9.327zM31.655 21.413c0 1.784.48 3.229 1.438 4.334 1.185 1.372 2.736 2.057 4.653 2.057 1.918 0 3.469-.685 4.654-2.057.959-1.105 1.438-2.55 1.438-4.334V10.428c0-1.784-.48-3.228-1.438-4.333-1.185-1.372-2.736-2.058-4.654-2.058-1.917 0-3.468.686-4.653 2.058-.959 1.105-1.438 2.55-1.438 4.333v10.985zm-3.994 0V10.428c0-2.889.898-5.252 2.696-7.09 1.89-1.93 4.354-2.896 7.39-2.896 3.035 0 5.498.966 7.39 2.896 1.797 1.825 2.696 4.188 2.696 7.09v10.985c0 2.89-.9 5.253-2.697 7.09-1.89 1.931-4.354 2.896-7.39 2.896-3.035 0-5.498-.965-7.39-2.896-1.797-1.837-2.695-4.2-2.695-7.09zM58.998 27.405h5.692c2.01 0 3.608-.633 4.793-1.898.866-.918 1.298-2.13 1.298-3.634 0-1.558-.459-2.87-1.378-3.935-.998-1.225-2.57-1.837-4.713-1.837h-5.692v11.304zm0-14.9h5.692c1.331 0 2.403-.432 3.215-1.298.72-.772 1.079-1.777 1.079-3.015 0-1.012-.433-1.924-1.298-2.737-.773-.679-1.771-1.018-2.996-1.018h-5.692v8.069zM55.003 31V1.84L57.12.842h7.57c2.25 0 4.12.612 5.612 1.837 1.77 1.438 2.656 3.282 2.656 5.533 0 2.29-1.012 4.194-3.035 5.712.652.28 1.298.699 1.937 1.258 1.944 1.77 2.916 3.968 2.916 6.59 0 2.637-.852 4.8-2.557 6.492C70.395 30.088 67.885 31 64.69 31h-9.686zM81.547 31.799V1.84L85.342.043h.2v29.958L81.747 31.8h-.2zM1.498 39.009c0 .387.049.722.145 1.005.097.282.224.516.38.701a1.464 1.464 0 001.13.54c.21.001.399-.04.568-.124.17-.086.318-.198.444-.335.129-.14.235-.298.319-.476.083-.177.144-.36.181-.549h.964c-.059.318-.157.615-.294.892a2.558 2.558 0 01-.516.722c-.208.205-.451.366-.73.484-.28.116-.592.174-.937.174-.395 0-.754-.067-1.077-.202a2.233 2.233 0 01-.819-.597c-.226-.26-.4-.58-.524-.956a4.201 4.201 0 01-.105-2.013c.053-.24.13-.466.23-.678.1-.213.223-.408.37-.585a2.464 2.464 0 011.15-.77c.237-.073.493-.11.767-.11.35 0 .662.05.936.15.275.1.515.238.722.415.21.175.385.383.525.625.142.243.255.508.339.795h-.993c-.142-.403-.339-.703-.589-.9-.25-.198-.563-.298-.94-.298-.242 0-.464.056-.665.17-.202.11-.376.26-.52.451a2.136 2.136 0 00-.34.662c-.08.253-.12.522-.12.807zM9.843 36.273l2.058 5.629h-.989l-.613-1.647H8.274a34.85 34.85 0 01-.299.828c-.102.277-.2.55-.294.819h-.993l2.058-5.629h1.097zm-.553 1.183l-.718 2H10l-.71-2zM14 39.937c.01.19.049.367.113.528.067.159.155.296.262.412.11.115.238.206.384.27.145.062.305.093.48.093.153 0 .3-.016.44-.049.14-.032.263-.083.37-.153a.813.813 0 00.259-.282.89.89 0 00.097-.432.558.558 0 00-.142-.387 1.163 1.163 0 00-.363-.27 3.325 3.325 0 00-.516-.21l-.593-.198a7.781 7.781 0 01-.59-.226 2.247 2.247 0 01-.516-.315 1.5 1.5 0 01-.367-.443 1.308 1.308 0 01-.137-.622c0-.247.049-.465.145-.653.097-.191.233-.35.408-.476.177-.13.387-.226.63-.29.241-.068.507-.102.798-.102.258 0 .487.027.686.081.199.051.372.121.52.21.151.089.277.194.38.314.102.121.185.25.25.388.067.134.117.276.149.423.032.146.054.288.065.428h-.965a1.328 1.328 0 00-.12-.468.997.997 0 00-.239-.327.879.879 0 00-.33-.19 1.193 1.193 0 00-.396-.064 1.76 1.76 0 00-.375.04c-.121.025-.23.065-.327.122a.673.673 0 00-.234.225.612.612 0 00-.089.34.59.59 0 00.137.395c.095.105.217.197.368.278.15.08.322.153.516.218.194.062.39.128.589.198.202.067.4.143.593.23.194.083.366.185.517.306.15.121.271.266.363.436.094.17.14.372.14.61 0 .284-.053.534-.16.75a1.518 1.518 0 01-.44.536c-.189.143-.413.25-.674.323-.258.073-.54.109-.847.109-.277 0-.548-.049-.811-.145a2.257 2.257 0 01-.702-.416 2.179 2.179 0 01-.5-.666 2.113 2.113 0 01-.202-.88H14zM19.795 36.273v2.324h2.542v-2.324h.96v5.629h-.96V39.38h-2.542v2.522h-.952v-5.629h.952zM26.203 36.273l1.574 4.414 1.61-4.413h1.065v5.628h-.948v-3.72l-1.3 3.72h-.802l-1.32-3.728v3.728h-.952v-5.629h1.073zM36.28 36.273v.803h-3.023v1.521h2.833v.811h-2.833v1.675h3.155v.819h-4.107v-5.629h3.974zM42.228 37.928c0 .244-.065.476-.194.694-.13.215-.324.402-.585.56a.908.908 0 01.323.186 1.11 1.11 0 01.339.597c.026.116.04.23.04.343v.807c0 .105.025.226.077.363.05.137.12.278.205.424h-1.04a1.183 1.183 0 01-.158-.404 1.792 1.792 0 01-.028-.19 3.86 3.86 0 01-.004-.157v-.86a.71.71 0 00-.045-.245.57.57 0 00-.133-.222.654.654 0 00-.246-.161.954.954 0 00-.371-.065h-1.436v2.304h-.952v-5.629h2.388c.29 0 .549.049.775.146.226.097.415.223.569.379.155.156.274.334.354.533.081.196.122.395.122.597zm-3.256.867h1.436a.88.88 0 00.601-.234.806.806 0 00.19-.27.86.86 0 00.068-.347.895.895 0 00-.064-.343.776.776 0 00-.182-.274.785.785 0 00-.27-.182.847.847 0 00-.343-.069h-1.436v1.72zM47.99 36.273v.803H44.97v1.521H47.8v.811h-2.832v1.675h3.154v.819h-4.107v-5.629h3.974zM55.917 36.273v.803h-2.933v1.521h2.542v.811h-2.542v2.494h-.952v-5.629h3.885zM62.398 39.078c0 .435-.058.835-.173 1.198a2.705 2.705 0 01-.509.94c-.22.26-.493.464-.819.609a2.705 2.705 0 01-1.113.218c-.414 0-.783-.073-1.106-.218a2.271 2.271 0 01-.814-.61 2.741 2.741 0 01-.505-.94 4.072 4.072 0 01-.17-1.206c0-.435.057-.833.17-1.194.116-.36.284-.67.505-.928.22-.258.492-.458.814-.6a2.71 2.71 0 011.106-.215c.417 0 .788.072 1.113.214.326.143.599.344.82.605.223.258.392.57.508.932.115.36.173.759.173 1.194zm-.96-.009c0-.341-.043-.644-.13-.907-.083-.267-.2-.491-.35-.674a1.467 1.467 0 00-.525-.416 1.48 1.48 0 00-.65-.145 1.478 1.478 0 00-1.17.56 2.018 2.018 0 00-.346.675 3.012 3.012 0 00-.125.907c0 .34.042.643.125.912.083.27.199.498.347.686.148.186.321.328.52.428.2.096.416.145.65.145.231 0 .448-.049.65-.145.201-.1.376-.242.524-.428.15-.188.267-.417.35-.686.087-.269.13-.573.13-.912zM68.137 37.928c0 .244-.065.476-.194.694-.129.215-.324.402-.585.56a.906.906 0 01.323.186 1.11 1.11 0 01.339.597c.027.116.04.23.04.343v.807c0 .105.026.226.077.363.05.137.12.278.206.424h-1.041a1.176 1.176 0 01-.158-.404 1.817 1.817 0 01-.028-.19 3.686 3.686 0 01-.004-.157v-.86a.71.71 0 00-.044-.245.57.57 0 00-.133-.222.653.653 0 00-.247-.161.954.954 0 00-.37-.065H64.88v2.304h-.952v-5.629h2.388c.29 0 .549.049.775.146.226.097.415.223.569.379.156.156.274.334.355.533.08.196.12.395.12.597zm-3.256.867h1.436a.881.881 0 00.601-.234.804.804 0 00.19-.27.858.858 0 00.069-.347.895.895 0 00-.065-.343.778.778 0 00-.181-.274.784.784 0 00-.27-.182.848.848 0 00-.344-.069h-1.436v1.72zM75.027 36.273l2.057 5.629h-.988l-.613-1.647h-2.026c-.094.272-.193.548-.298.828-.102.277-.2.55-.295.819h-.992l2.058-5.629h1.097zm-.553 1.183l-.718 2h1.428l-.71-2zM79.523 36.273v4.81h2.707v.819h-3.66v-5.629h.953zM84.616 36.273v4.81h2.707v.819h-3.66v-5.629h.953z"
      ></path>
    </Icon>
  );
};
export default LogoDesktop;
