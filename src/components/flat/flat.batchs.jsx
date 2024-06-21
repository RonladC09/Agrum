import * as React from "react";
import { motion } from "framer-motion";
import { BatchContext } from "../../sections/batchs";

const FlatComponentSVG = () => {
  const {
    batchs,

    setPreview,
    setStreetSelected,
    setBatchSelected,
  } = React.useContext(BatchContext);

  const batchHandler = (reference) => {
    setStreetSelected(false);
    const batch = batchs?.filter((batch) => batch.reference === reference)[0];
    if (batch) setBatchSelected(batch);
    if (reference === "vendido")
      setBatchSelected({
        reference: "vendido",
        area: 0,
        price: 1,
        lengths: [
          {
            front_part: "0",
            back_part: "0",
            right_part: "0",
            left_part: "0",
          },
        ],
      });
  };

  return (
    <svg
      viewBox="0 0 1737 1703"
      className="z-50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g id="flat">
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("4B")}
          onClick={() => batchHandler("4B")}
          id="4B"
        >
          <mask id="path-1-inside-1_316_87" fill="black">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1423.06 859.694C1424.87 859 .08 1426.87 859.838 1427.82 861.502L1450.91 902.016C1451.93 903.813 1451.15 906.102 1449.24 906.891V906.891C1447.38 907.655 1446.58 909.838 1447.49 911.624L1455.94 928.22C1457.15 930.604 1455.73 933.486 1453.1 933.969L1374.32 948.438C1372.55 948.762 1370.79 947.873 1370 946.264L1343.16 891.494C1342.1 889.326 1343.18 886.718 1345.47 885.944L1423.06 859.694Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1423.06 859.694C1424.87 859.08 1426.87 859.838 1427.82 861.502L1450.91 902.016C1451.93 903.813 1451.15 906.102 1449.24 906.891V906.891C1447.38 907.655 1446.58 909.838 1447.49 911.624L1455.94 928.22C1457.15 930.604 1455.73 933.486 1453.1 933.969L1374.32 948.438C1372.55 948.762 1370.79 947.873 1370 946.264L1343.16 891.494C1342.1 889.326 1343.18 886.718 1345.47 885.944L1423.06 859.694Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-1-inside-1_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("4A")}
          onClick={() => batchHandler("4A")}
          id="4A"
        >
          <mask id="path-2-inside-2_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1397.76 807.385C1399.69 806.686 1401.83 807.559 1402.72 809.406L1422.42 850.199C1423.45 852.319 1422.43 854.861 1420.22 855.685L1342.34 884.77C1340.42 885.486 1338.27 884.638 1337.36 882.805L1316.78 841.47C1315.72 839.33 1316.76 836.741 1319 835.926L1397.76 807.385Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1397.76 807.385C1399.69 806.686 1401.83 807.559 1402.72 809.406L1422.42 850.199C1423.45 852.319 1422.43 854.861 1420.22 855.685L1342.34 884.77C1340.42 885.486 1338.27 884.638 1337.36 882.805L1316.78 841.47C1315.72 839.33 1316.76 836.741 1319 835.926L1397.76 807.385Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-2-inside-2_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("3B")}
          onClick={() => batchHandler("3B")}
          id="3B"
        >
          <mask id="path-3-inside-3_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1371.97 758.493C1373.9 757.769 1376.06 758.629 1376.97 760.481L1396.51 800.469C1397.55 802.596 1396.53 805.155 1394.31 805.977L1317.99 834.235C1316.05 834.951 1313.89 834.078 1313 832.22L1293.85 792.48C1292.83 790.362 1293.85 787.825 1296.05 786.999L1371.97 758.493Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1371.97 758.493C1373.9 757.769 1376.06 758.629 1376.97 760.481L1396.51 800.469C1397.55 802.596 1396.53 805.155 1394.31 805.977L1317.99 834.235C1316.05 834.951 1313.89 834.078 1313 832.22L1293.85 792.48C1292.83 790.362 1293.85 787.825 1296.05 786.999L1371.97 758.493Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-3-inside-3_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("3A")}
          onClick={() => batchHandler("3A")}
          id="3A"
        >
          <mask id="path-4-inside-4_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1346.8 710.692C1348.72 709.963 1350.88 710.804 1351.8 712.639L1371.54 752.033C1372.6 754.148 1371.6 756.715 1369.39 757.561L1293.11 786.751C1291.23 787.47 1289.11 786.681 1288.16 784.908L1267.14 745.786C1266 743.659 1266.98 741.011 1269.24 740.154L1346.8 710.692Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1346.8 710.692C1348.72 709.963 1350.88 710.804 1351.8 712.639L1371.54 752.033C1372.6 754.148 1371.6 756.715 1369.39 757.561L1293.11 786.751C1291.23 787.47 1289.11 786.681 1288.16 784.908L1267.14 745.786C1266 743.659 1266.98 741.011 1269.24 740.154L1346.8 710.692Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-4-inside-4_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("5A")}
          onClick={() => batchHandler("5A")}
          id="5A"
        >
          <mask id="path-5-inside-5_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1260 743.095C1261.89 742.407 1264 743.235 1264.92 745.026L1285 784.099C1286.1 786.242 1285.07 788.865 1282.8 789.687L1206.38 817.428C1204.49 818.115 1202.38 817.287 1201.46 815.496L1181.38 776.423C1180.28 774.28 1181.31 771.657 1183.57 770.835L1260 743.095Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1260 743.095C1261.89 742.407 1264 743.235 1264.92 745.026L1285 784.099C1286.1 786.242 1285.07 788.865 1282.8 789.687L1206.38 817.428C1204.49 818.115 1202.38 817.287 1201.46 815.496L1181.38 776.423C1180.28 774.28 1181.31 771.657 1183.57 770.835L1260 743.095Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-5-inside-5_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("5B")}
          onClick={() => batchHandler("5B")}
          id="5B"
        >
          <mask id="path-6-inside-6_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1284.62 793.078C1286.51 792.386 1288.63 793.216 1289.55 795.012L1310.07 835.076C1311.16 837.217 1310.13 839.834 1307.88 840.658L1229.67 869.176C1227.78 869.867 1225.66 869.038 1224.74 867.241L1204.22 827.177C1203.13 825.037 1204.15 822.42 1206.41 821.596L1284.62 793.078Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1284.62 793.078C1286.51 792.386 1288.63 793.216 1289.55 795.012L1310.07 835.076C1311.16 837.217 1310.13 839.834 1307.88 840.658L1229.67 869.176C1227.78 869.867 1225.66 869.038 1224.74 867.241L1204.22 827.177C1203.13 825.037 1204.15 822.42 1206.41 821.596L1284.62 793.078Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-6-inside-6_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("6A")}
          onClick={() => batchHandler("6A")}
          id="6A"
        >
          <mask id="path-7-inside-7_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1311.47 840.932C1313.37 840.241 1315.48 841.07 1316.4 842.867L1336.92 882.931C1338.02 885.071 1336.99 887.688 1334.73 888.512L1256.53 917.03C1254.63 917.722 1252.52 916.892 1251.6 915.096L1231.08 875.032C1229.98 872.891 1231.01 870.274 1233.27 869.45L1311.47 840.932Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1311.47 840.932C1313.37 840.241 1315.48 841.07 1316.4 842.867L1336.92 882.931C1338.02 885.071 1336.99 887.688 1334.73 888.512L1256.53 917.03C1254.63 917.722 1252.52 916.892 1251.6 915.096L1231.08 875.032C1229.98 872.891 1231.01 870.274 1233.27 869.45L1311.47 840.932Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-7-inside-7_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("6B")}
          onClick={() => batchHandler("6B")}
          id="6B"
        >
          <mask id="path-8-inside-8_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1336.24 889.497C1338.19 888.739 1340.4 889.614 1341.3 891.503L1366.92 945.212C1368.04 947.547 1366.68 950.31 1364.14 950.847L1280.49 968.602C1278.67 968.987 1276.83 968.074 1276.04 966.396L1256.52 925.029C1255.52 922.93 1256.52 920.432 1258.69 919.593L1336.24 889.497Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1336.24 889.497C1338.19 888.739 1340.4 889.614 1341.3 891.503L1366.92 945.212C1368.04 947.547 1366.68 950.31 1364.14 950.847L1280.49 968.602C1278.67 968.987 1276.83 968.074 1276.04 966.396L1256.52 925.029C1255.52 922.93 1256.52 920.432 1258.69 919.593L1336.24 889.497Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-8-inside-8_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("7B")}
          onClick={() => batchHandler("7B")}
          id="7B"
        >
          <mask id="path-9-inside-9_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1220.18 926.036C1222.09 925.348 1224.21 926.197 1225.12 928.011L1245.36 968.527C1246.54 970.89 1245.15 973.729 1242.56 974.239L1158.67 990.774C1156.92 991.119 1155.16 990.265 1154.34 988.681L1139.53 959.921C1138.43 957.775 1139.46 955.146 1141.73 954.327L1220.18 926.036Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1220.18 926.036C1222.09 925.348 1224.21 926.197 1225.12 928.011L1245.36 968.527C1246.54 970.89 1245.15 973.729 1242.56 974.239L1158.67 990.774C1156.92 991.119 1155.16 990.265 1154.34 988.681L1139.53 959.921C1138.43 957.775 1139.46 955.146 1141.73 954.327L1220.18 926.036Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-9-inside-9_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("7A")}
          onClick={() => batchHandler("7A")}
          id="7A"
        >
          <mask id="path-10-inside-10_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1203.32 875.113C1205.14 874.591 1207.08 875.416 1207.96 877.091L1228.83 916.636C1229.96 918.781 1228.94 921.432 1226.66 922.262L1140.25 953.701C1138.33 954.401 1136.19 953.535 1135.29 951.695L1112.97 905.911C1111.88 903.676 1113.07 900.998 1115.46 900.313L1203.32 875.113Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1203.32 875.113C1205.14 874.591 1207.08 875.416 1207.96 877.091L1228.83 916.636C1229.96 918.781 1228.94 921.432 1226.66 922.262L1140.25 953.701C1138.33 954.401 1136.19 953.535 1135.29 951.695L1112.97 905.911C1111.88 903.676 1113.07 900.998 1115.46 900.313L1203.32 875.113Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-10-inside-10_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("vendido")}
          onClick={() => batchHandler("vendido")}
          id="batch"
        >
          <mask id="path-11-inside-11_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1155.88 780.108C1157.79 779.395 1159.93 780.232 1160.85 782.052L1204.13 867.748C1205.26 869.974 1204.09 872.675 1201.7 873.385L996.851 934.287C994.996 934.839 993.011 933.983 992.14 932.254L955.534 859.665C954.461 857.538 955.474 854.95 957.706 854.117L1155.88 780.108Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1155.88 780.108C1157.79 779.395 1159.93 780.232 1160.85 782.052L1204.13 867.748C1205.26 869.974 1204.09 872.675 1201.7 873.385L996.851 934.287C994.996 934.839 993.011 933.983 992.14 932.254L955.534 859.665C954.461 857.538 955.474 854.95 957.706 854.117L1155.88 780.108Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-11-inside-11_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("8AB")}
          onClick={() => batchHandler("8AB")}
          id="8AB"
        >
          <mask id="path-12-inside-12_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1105.03 905.548C1106.84 905.034 1108.76 905.844 1109.65 907.495L1153.13 988.03C1154.39 990.373 1153.06 993.274 1150.46 993.839L1022.42 1021.63C1020.7 1022 1018.94 1021.21 1018.08 1019.67L992.102 973.109C990.966 971.074 991.805 968.503 993.921 967.527L1011.07 959.628C1013.18 958.657 1014.02 956.1 1012.9 954.066L1004.73 939.216C1003.49 936.965 1004.66 934.145 1007.13 933.441L1105.03 905.548Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1105.03 905.548C1106.84 905.034 1108.76 905.844 1109.65 907.495L1153.13 988.03C1154.39 990.373 1153.06 993.274 1150.46 993.839L1022.42 1021.63C1020.7 1022 1018.94 1021.21 1018.08 1019.67L992.102 973.109C990.966 971.074 991.805 968.503 993.921 967.527L1011.07 959.628C1013.18 958.657 1014.02 956.1 1012.9 954.066L1004.73 939.216C1003.49 936.965 1004.66 934.145 1007.13 933.441L1105.03 905.548Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-12-inside-12_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("vendido")}
          onClick={() => batchHandler("vendido")}
          id="vendido"
        >
          <mask id="path-13-inside-13_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M969.677 945.275C971.529 944.613 973.589 945.396 974.533 947.123L1012.29 1016.17C1013.59 1018.55 1012.2 1021.51 1009.54 1022.02L901.058 1042.87C899.255 1043.22 897.447 1042.3 896.674 1040.63L870.968 985.194C869.978 983.06 871.035 980.536 873.25 979.744L969.677 945.275Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M969.677 945.275C971.529 944.613 973.589 945.396 974.533 947.123L1012.29 1016.17C1013.59 1018.55 1012.2 1021.51 1009.54 1022.02L901.058 1042.87C899.255 1043.22 897.447 1042.3 896.674 1040.63L870.968 985.194C869.978 983.06 871.035 980.536 873.25 979.744L969.677 945.275Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-13-inside-13_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("9B")}
          onClick={() => batchHandler("9B")}
          id="9B"
        >
          <mask id="path-14-inside-14_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M877.89 883.521C879.79 882.798 881.931 883.617 882.864 885.423L918.923 955.181C920.026 957.315 919.013 959.933 916.76 960.768L870.026 978.091C868.081 978.811 865.907 977.926 865.02 976.052L831.711 905.691C830.712 903.582 831.723 901.07 833.905 900.24L877.89 883.521Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M877.89 883.521C879.79 882.798 881.931 883.617 882.864 885.423L918.923 955.181C920.026 957.315 919.013 959.933 916.76 960.768L870.026 978.091C868.081 978.811 865.907 977.926 865.02 976.052L831.711 905.691C830.712 903.582 831.723 901.07 833.905 900.24L877.89 883.521Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-14-inside-14_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("9A")}
          onClick={() => batchHandler("9A")}
          id="9A"
        >
          <mask id="path-15-inside-15_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M932.042 865.259C933.929 864.604 936.009 865.441 936.917 867.22L971.905 935.793C972.997 937.932 971.97 940.544 969.715 941.368L926.773 957.058C924.884 957.748 922.777 956.929 921.85 955.144L885.982 886.094C884.858 883.929 885.916 881.271 888.22 880.471L932.042 865.259Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M932.042 865.259C933.929 864.604 936.009 865.441 936.917 867.22L971.905 935.793C972.997 937.932 971.97 940.544 969.715 941.368L926.773 957.058C924.884 957.748 922.777 956.929 921.85 955.144L885.982 886.094C884.858 883.929 885.916 881.271 888.22 880.471L932.042 865.259Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-15-inside-15_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("21AB")}
          onClick={() => batchHandler("21AB")}
          id="21AB"
        >
          <mask id="path-16-inside-16_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M787.885 726.102C789.738 725.288 791.907 725.986 792.937 727.729L865.003 849.676C866.327 851.917 865.193 854.805 862.698 855.546L806.435 872.256C804.7 872.771 802.835 872.057 801.888 870.514L731.49 755.833C730.221 753.765 731.07 751.053 733.291 750.078L787.885 726.102Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M787.885 726.102C789.738 725.288 791.907 725.986 792.937 727.729L865.003 849.676C866.327 851.917 865.193 854.805 862.698 855.546L806.435 872.256C804.7 872.771 802.835 872.057 801.888 870.514L731.49 755.833C730.221 753.765 731.07 751.053 733.291 750.078L787.885 726.102Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-16-inside-16_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("22A")}
          onClick={() => batchHandler("22A")}
          id="22A"
        >
          <mask id="path-17-inside-17_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M848.568 701.231C850.432 700.417 852.61 701.131 853.63 702.891L885.96 758.686C887.138 760.72 886.318 763.326 884.187 764.318L834.83 787.294C832.947 788.171 830.707 787.461 829.673 785.659L796.94 728.616C795.754 726.55 796.626 723.913 798.808 722.96L848.568 701.231Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M848.568 701.231C850.432 700.417 852.61 701.131 853.63 702.891L885.96 758.686C887.138 760.72 886.318 763.326 884.187 764.318L834.83 787.294C832.947 788.171 830.707 787.461 829.673 785.659L796.94 728.616C795.754 726.55 796.626 723.913 798.808 722.96L848.568 701.231Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-17-inside-17_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("22B")}
          onClick={() => batchHandler("22B")}
          id="22B"
        >
          <mask id="path-18-inside-18_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M888.315 765.318C890.144 764.505 892.293 765.169 893.344 766.873L928.142 823.274C929.462 825.414 928.504 828.227 926.152 829.116L871.512 849.764C869.676 850.458 867.607 849.717 866.629 848.014L835.417 793.657C834.236 791.6 835.094 788.973 837.261 788.01L888.315 765.318Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M888.315 765.318C890.144 764.505 892.293 765.169 893.344 766.873L928.142 823.274C929.462 825.414 928.504 828.227 926.152 829.116L871.512 849.764C869.676 850.458 867.607 849.717 866.629 848.014L835.417 793.657C834.236 791.6 835.094 788.973 837.261 788.01L888.315 765.318Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-18-inside-18_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("23AB")}
          onClick={() => batchHandler("23AB")}
          id="23AB"
        >
          <mask id="path-19-inside-19_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M832.737 665.964C830.544 666.968 829.731 669.67 831.006 671.717L845.625 695.186C846.923 697.269 846.056 700.018 843.798 700.98L730.131 749.42C728.374 750.168 726.333 749.57 725.258 747.992L706.196 720.02C705.238 718.614 705.274 716.756 706.286 715.388L710.466 709.737C710.626 709.521 710.807 709.322 711.006 709.142L816.204 614.463C816.612 614.096 817.091 613.816 817.611 613.642L825.427 611.029C827.2 610.437 829.147 611.151 830.116 612.749L853.613 651.51C854.853 653.556 854.032 656.226 851.856 657.221L832.737 665.964Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M832.737 665.964C830.544 666.968 829.731 669.67 831.006 671.717L845.625 695.186C846.923 697.269 846.056 700.018 843.798 700.98L730.131 749.42C728.374 750.168 726.333 749.57 725.258 747.992L706.196 720.02C705.238 718.614 705.274 716.756 706.286 715.388L710.466 709.737C710.626 709.521 710.807 709.322 711.006 709.142L816.204 614.463C816.612 614.096 817.091 613.816 817.611 613.642L825.427 611.029C827.2 610.437 829.147 611.151 830.116 612.749L853.613 651.51C854.853 653.556 854.032 656.226 851.856 657.221L832.737 665.964Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-19-inside-19_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("12B")}
          onClick={() => batchHandler("12B")}
          id="12B"
        >
          <mask id="path-20-inside-20_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              whileHover={{ fill: "#609407" }}
              d="M458.754 1187.95C460.58 1186.96 462.86 1187.54 464.001 1189.27L488.793 1226.96C490.028 1228.84 489.475 1231.37 487.569 1232.56L407.092 1282.77C405.242 1283.92 402.81 1283.38 401.621 1281.56L373.852 1238.87C372.578 1236.91 373.246 1234.28 375.299 1233.17L458.754 1187.95Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M458.754 1187.95C460.58 1186.96 462.86 1187.54 464.001 1189.27L488.793 1226.96C490.028 1228.84 489.475 1231.37 487.569 1232.56L407.092 1282.77C405.242 1283.92 402.81 1283.38 401.621 1281.56L373.852 1238.87C372.578 1236.91 373.246 1234.28 375.299 1233.17L458.754 1187.95Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-20-inside-20_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("12A")}
          onClick={() => batchHandler("12A")}
          id="12A"
        >
          <mask id="path-21-inside-21_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M430.222 1142.33C431.995 1141.46 434.136 1142.02 435.264 1143.64L461.882 1181.88C463.277 1183.88 462.566 1186.66 460.378 1187.75L374.238 1230.51C372.44 1231.41 370.259 1230.83 369.139 1229.16L342.93 1190.14C341.578 1188.13 342.313 1185.39 344.491 1184.32L430.222 1142.33Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M430.222 1142.33C431.995 1141.46 434.136 1142.02 435.264 1143.64L461.882 1181.88C463.277 1183.88 462.566 1186.66 460.378 1187.75L374.238 1230.51C372.44 1231.41 370.259 1230.83 369.139 1229.16L342.93 1190.14C341.578 1188.13 342.313 1185.39 344.491 1184.32L430.222 1142.33Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-21-inside-21_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("13B")}
          onClick={() => batchHandler("13B")}
          id="13B"
        >
          <mask id="path-22-inside-22_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M402.623 1101.2C404.445 1100.25 406.693 1100.84 407.82 1102.56L428.613 1134.28C429.909 1136.26 429.215 1138.92 427.119 1140.02L341.876 1184.54C340.053 1185.5 337.806 1184.91 336.679 1183.19L315.886 1151.47C314.59 1149.49 315.284 1146.82 317.38 1145.73L402.623 1101.2Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M402.623 1101.2C404.445 1100.25 406.693 1100.84 407.82 1102.56L428.613 1134.28C429.909 1136.26 429.215 1138.92 427.119 1140.02L341.876 1184.54C340.053 1185.5 337.806 1184.91 336.679 1183.19L315.886 1151.47C314.59 1149.49 315.284 1146.82 317.38 1145.73L402.623 1101.2Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-22-inside-22_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("13A")}
          onClick={() => batchHandler("13A")}
          id="13A"
        >
          <mask id="path-23-inside-23_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M372.959 1058.49C374.763 1057.6 376.948 1058.19 378.061 1059.86L401.771 1095.53C403.086 1097.51 402.399 1100.19 400.295 1101.29L315.594 1145.6C313.761 1146.56 311.499 1145.96 310.378 1144.23L285.992 1106.42C284.697 1104.41 285.44 1101.72 287.582 1100.66L372.959 1058.49Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M372.959 1058.49C374.763 1057.6 376.948 1058.19 378.061 1059.86L401.771 1095.53C403.086 1097.51 402.399 1100.19 400.295 1101.29L315.594 1145.6C313.761 1146.56 311.499 1145.96 310.378 1144.23L285.992 1106.42C284.697 1104.41 285.44 1101.72 287.582 1100.66L372.959 1058.49Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-23-inside-23_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("14B")}
          onClick={() => batchHandler("14B")}
          id="14B"
        >
          <mask id="path-24-inside-24_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M343.795 1019.44C345.551 1018.6 347.659 1019.15 348.787 1020.73L371.701 1053.01C373.131 1055.03 372.411 1057.84 370.189 1058.92L289.138 1098.37C287.353 1099.23 285.201 1098.66 284.083 1097.02L261.553 1063.99C260.173 1061.97 260.92 1059.19 263.128 1058.13L343.795 1019.44Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M343.795 1019.44C345.551 1018.6 347.659 1019.15 348.787 1020.73L371.701 1053.01C373.131 1055.03 372.411 1057.84 370.189 1058.92L289.138 1098.37C287.353 1099.23 285.201 1098.66 284.083 1097.02L261.553 1063.99C260.173 1061.97 260.92 1059.19 263.128 1058.13L343.795 1019.44Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-24-inside-24_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("14A")}
          onClick={() => batchHandler("14A")}
          id="14A"
        >
          <mask id="path-25-inside-25_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              whileHover={{ fill: "#609407" }}
              d="M319.865 982.262C321.705 981.297 323.978 981.901 325.096 983.653L342.367 1010.72C343.623 1012.69 342.932 1015.32 340.868 1016.41L259.952 1059.29C258.158 1060.24 255.937 1059.7 254.785 1058.03L236.277 1031.17C234.916 1029.19 235.588 1026.47 237.713 1025.36L319.865 982.262Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M319.865 982.262C321.705 981.297 323.978 981.901 325.096 983.653L342.367 1010.72C343.623 1012.69 342.932 1015.32 340.868 1016.41L259.952 1059.29C258.158 1060.24 255.937 1059.7 254.785 1058.03L236.277 1031.17C234.916 1029.19 235.588 1026.47 237.713 1025.36L319.865 982.262Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-25-inside-25_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("18AB")}
          onClick={() => batchHandler("18AB")}
          id="18AB"
        >
          <mask id="path-26-inside-26_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M305.071 659.807C306.856 659.073 308.911 659.719 309.956 661.342L346.486 718.085C347.775 720.086 347.04 722.764 344.911 723.828L260.147 766.182C258.338 767.087 256.138 766.498 255.022 764.81L218.018 708.829C216.76 706.926 217.345 704.359 219.303 703.189L262.565 677.333C262.735 677.231 262.912 677.142 263.096 677.067L305.071 659.807Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M305.071 659.807C306.856 659.073 308.911 659.719 309.956 661.342L346.486 718.085C347.775 720.086 347.04 722.764 344.911 723.828L260.147 766.182C258.338 767.087 256.138 766.498 255.022 764.81L218.018 708.829C216.76 706.926 217.345 704.359 219.303 703.189L262.565 677.333C262.735 677.231 262.912 677.142 263.096 677.067L305.071 659.807Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-26-inside-26_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("17A")}
          onClick={() => batchHandler("17A")}
          id="17A"
        >
          <mask id="path-27-inside-27_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              whileHover={{ fill: "#609407" }}
              d="M344.634 726.669C346.236 725.836 348.198 726.18 349.421 727.508L350.298 728.461C351.079 729.309 352.188 729.779 353.341 729.75L353.456 729.747C354.773 729.714 356.022 730.331 356.795 731.397L378.666 761.551C380.103 763.533 379.439 766.329 377.265 767.453L290.604 812.243C288.856 813.146 286.71 812.644 285.544 811.058L259.768 775.978C258.314 774 258.969 771.192 261.146 770.06L344.634 726.669Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M344.634 726.669C346.236 725.836 348.198 726.18 349.421 727.508L350.298 728.461C351.079 729.309 352.188 729.779 353.341 729.75L353.456 729.747C354.773 729.714 356.022 730.331 356.795 731.397L378.666 761.551C380.103 763.533 379.439 766.329 377.265 767.453L290.604 812.243C288.856 813.146 286.71 812.644 285.544 811.058L259.768 775.978C258.314 774 258.969 771.192 261.146 770.06L344.634 726.669Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-27-inside-27_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("17B")}
          onClick={() => batchHandler("17B")}
          id="17B"
        >
          <mask id="path-28-inside-28_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              whileHover={{ fill: "#609407" }}
              d="M376.522 770.718C378.354 769.753 380.619 770.345 381.744 772.083L405.12 808.2C406.405 810.186 405.696 812.846 403.594 813.929L317.767 858.154C315.925 859.103 313.663 858.488 312.555 856.737L290.029 821.152C288.78 819.179 289.479 816.561 291.545 815.473L376.522 770.718Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M376.522 770.718C378.354 769.753 380.619 770.345 381.744 772.083L405.12 808.2C406.405 810.186 405.696 812.846 403.594 813.929L317.767 858.154C315.925 859.103 313.663 858.488 312.555 856.737L290.029 821.152C288.78 819.179 289.479 816.561 291.545 815.473L376.522 770.718Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-28-inside-28_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("vendido")}
          onClick={() => batchHandler("vendido")}
          id="vendido"
          >
          <mask id="path-29-inside-29_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              whileHover={{ fill: "#609407" }}
              d="M408.475 816.229C410.233 815.334 412.38 815.854 413.534 817.454L460.524 882.623C461.965 884.621 461.274 887.434 459.072 888.538L407.194 914.551L371.056 933.303C369.263 934.233 367.059 933.681 365.916 932.016L321.426 867.203C320.103 865.275 320.709 862.627 322.74 861.466L348.341 846.839L408.475 816.229Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M408.475 816.229C410.233 815.334 412.38 815.854 413.534 817.454L460.524 882.623C461.965 884.621 461.274 887.434 459.072 888.538L407.194 914.551L371.056 933.303C369.263 934.233 367.059 933.681 365.916 932.016L321.426 867.203C320.103 865.275 320.709 862.627 322.74 861.466L348.341 846.839L408.475 816.229Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-29-inside-29_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("15A")}
          onClick={() => batchHandler("15A")}
          id="15A"
        >
          <mask id="path-30-inside-30_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              whileHover={{ fill: "#609407" }}
              d="M371.813 940.566C370.703 938.543 371.53 936.003 373.619 935.022L394.633 925.151C396.47 924.287 398.664 924.938 399.733 926.664L429.022 973.921C430.285 975.959 429.483 978.644 427.308 979.655L374.71 1004.12C372.851 1004.98 370.639 1004.3 369.588 1002.54L348.291 966.841C347.127 964.89 347.819 962.363 349.814 961.278L371.981 949.22C373.927 948.162 374.642 945.725 373.577 943.783L371.813 940.566Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M371.813 940.566C370.703 938.543 371.53 936.003 373.619 935.022L394.633 925.151C396.47 924.287 398.664 924.938 399.733 926.664L429.022 973.921C430.285 975.959 429.483 978.644 427.308 979.655L374.71 1004.12C372.851 1004.98 370.639 1004.3 369.588 1002.54L348.291 966.841C347.127 964.89 347.819 962.363 349.814 961.278L371.981 949.22C373.927 948.162 374.642 945.725 373.577 943.783L371.813 940.566Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-30-inside-30_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("15B")}
          onClick={() => batchHandler("15B")}
          id="15B"
        >
          <mask id="path-31-inside-31_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M430.593 983.817C432.353 982.989 434.454 983.549 435.57 985.142L472.445 1037.79C473.872 1039.83 473.114 1042.66 470.861 1043.71L416.035 1069.31C414.218 1070.16 412.054 1069.53 410.974 1067.84L376.621 1014.17C375.319 1012.14 376.103 1009.42 378.288 1008.4L430.593 983.817Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M430.593 983.817C432.353 982.989 434.454 983.549 435.57 985.142L472.445 1037.79C473.872 1039.83 473.114 1042.66 470.861 1043.71L416.035 1069.31C414.218 1070.16 412.054 1069.53 410.974 1067.84L376.621 1014.17C375.319 1012.14 376.103 1009.42 378.288 1008.4L430.593 983.817Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-31-inside-31_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("16B")}
          onClick={() => batchHandler("16B")}
          id="16B"
        >
          <mask id="path-32-inside-32_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M503.102 944.743C504.958 943.829 507.206 944.481 508.284 946.248L524.383 972.633L541.406 999.211C542.688 1001.21 541.952 1003.88 539.825 1004.95L477.752 1035.96C475.951 1036.86 473.762 1036.28 472.641 1034.61L437.471 982.115C436.125 980.105 436.857 977.369 439.027 976.3L503.102 944.743Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M503.102 944.743C504.958 943.829 507.206 944.481 508.284 946.248L524.383 972.633L541.406 999.211C542.688 1001.21 541.952 1003.88 539.825 1004.95L477.752 1035.96C475.951 1036.86 473.762 1036.28 472.641 1034.61L437.471 982.115C436.125 980.105 436.857 977.369 439.027 976.3L503.102 944.743Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-32-inside-32_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("16A")}
          onClick={() => batchHandler("16A")}
          id="16A"
        >
          <mask id="path-33-inside-33_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M464.118 890.09C465.875 889.232 467.994 889.771 469.129 891.363L502.301 937.899C503.73 939.904 503.026 942.712 500.819 943.805L437.612 975.108C435.776 976.018 433.548 975.392 432.454 973.659L401.966 925.348C400.695 923.334 401.454 920.662 403.595 919.618L464.118 890.09Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M464.118 890.09C465.875 889.232 467.994 889.771 469.129 891.363L502.301 937.899C503.73 939.904 503.026 942.712 500.819 943.805L437.612 975.108C435.776 976.018 433.548 975.392 432.454 973.659L401.966 925.348C400.695 923.334 401.454 920.662 403.595 919.618L464.118 890.09Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-33-inside-33_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("11A")}
          onClick={() => batchHandler("11A")}
          id="11A"
        >
          <mask id="path-34-inside-34_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M490.115 1067.74C491.926 1066.83 494.131 1067.42 495.248 1069.11L526.754 1116.8C528.08 1118.8 527.347 1121.52 525.192 1122.59L471.388 1149.23C469.576 1150.13 467.378 1149.53 466.269 1147.84L435.115 1100.36C433.803 1098.36 434.527 1095.66 436.664 1094.59L490.115 1067.74Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M490.115 1067.74C491.926 1066.83 494.131 1067.42 495.248 1069.11L526.754 1116.8C528.08 1118.8 527.347 1121.52 525.192 1122.59L471.388 1149.23C469.576 1150.13 467.378 1149.53 466.269 1147.84L435.115 1100.36C433.803 1098.36 434.527 1095.66 436.664 1094.59L490.115 1067.74Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-34-inside-34_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("11B")}
          onClick={() => batchHandler("11B")}
          id="11B"
        >
          <mask id="path-35-inside-35_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M527.267 1125.33C529.06 1124.44 531.232 1125.02 532.352 1126.68L564.721 1174.59C566.04 1176.54 565.395 1179.21 563.328 1180.34L549.872 1187.7L532.3 1200.16C532.142 1200.27 531.976 1200.37 531.804 1200.46L510.969 1211.08C509.176 1211.99 506.984 1211.43 505.849 1209.77L470.712 1158.34C469.34 1156.33 470.063 1153.57 472.244 1152.5L527.267 1125.33Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M527.267 1125.33C529.06 1124.44 531.232 1125.02 532.352 1126.68L564.721 1174.59C566.04 1176.54 565.395 1179.21 563.328 1180.34L549.872 1187.7L532.3 1200.16C532.142 1200.27 531.976 1200.37 531.804 1200.46L510.969 1211.08C509.176 1211.99 506.984 1211.43 505.849 1209.77L470.712 1158.34C469.34 1156.33 470.063 1153.57 472.244 1152.5L527.267 1125.33Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-35-inside-35_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("10AB")}
          onClick={() => batchHandler("10AB")}
          id="10AB"
        >
          <mask id="path-36-inside-36_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M581.877 1023.36C583.756 1022.4 586.054 1023.07 587.129 1024.89L648.285 1128.02C649.463 1130.01 648.718 1132.58 646.658 1133.62L570.666 1172.29C568.843 1173.22 566.613 1172.62 565.498 1170.91L535.916 1125.36L531.422 1119.83L499.25 1070.3C497.955 1068.31 498.674 1065.63 500.792 1064.56L581.877 1023.36Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M581.877 1023.36C583.756 1022.4 586.054 1023.07 587.129 1024.89L648.285 1128.02C649.463 1130.01 648.718 1132.58 646.658 1133.62L570.666 1172.29C568.843 1173.22 566.613 1172.62 565.498 1170.91L535.916 1125.36L531.422 1119.83L499.25 1070.3C497.955 1068.31 498.674 1065.63 500.792 1064.56L581.877 1023.36Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-36-inside-36_316_87)"
          />
        </motion.g>
        <motion.path
          className="cursor-pointer outline-none border-none"
          whileHover={{ fill: "#609407" }}
          onClick={() => batchHandler('vendido')}
          id="vendido"
          d="M640.833 989.087L775.019 922.223L823.985 905.082C825.891 904.415 827.996 905.274 828.891 907.084L865.308 980.675C865.658 981.382 866.209 981.97 866.893 982.365L867.797 982.887C868.498 983.292 869.06 983.899 869.408 984.63L894.603 1037.5C895.744 1039.89 894.282 1042.71 891.668 1043.16L841.869 1051.71C841.682 1051.74 841.498 1051.78 841.317 1051.84L694.729 1099.13C694.478 1099.21 694.235 1099.32 694.005 1099.44L653.975 1121.82C652.102 1122.87 649.736 1122.25 648.614 1120.42L587.687 1021.12C586.468 1019.13 587.199 1016.53 589.274 1015.47L640.833 989.087Z"
          fill="#D9D9D9"
          fill-opacity="0.44"
        />
        <motion.path
          className="cursor-pointer outline-none border-none"
          whileHover={{ fill: "#609407" }}
          id="house"
          d="M678.671 1051.61C677.514 1049.5 678.473 1046.85 680.714 1045.97L712.257 1033.55C714.038 1032.85 716.067 1033.51 717.096 1035.12L729.817 1055.08C731.193 1057.24 730.215 1060.12 727.808 1060.99L694.32 1073.14C692.464 1073.81 690.395 1073.03 689.447 1071.3L678.671 1051.61Z"
          fill="#D9D9D9"
        />
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("19A")}
          onClick={() => batchHandler("19A")}
          id="19A"
        >
          <mask id="path-39-inside-37_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M414.657 705.325C415.926 704.691 417.436 704.777 418.625 705.55L477.261 743.688C479.844 745.368 479.638 749.215 476.89 750.608L420.141 779.388C418.303 780.32 416.057 779.703 414.954 777.962L382.28 726.423C381.011 724.421 381.751 721.762 383.871 720.703L414.657 705.325Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M414.657 705.325C415.926 704.691 417.436 704.777 418.625 705.55L477.261 743.688C479.844 745.368 479.638 749.215 476.89 750.608L420.141 779.388C418.303 780.32 416.057 779.703 414.954 777.962L382.28 726.423C381.011 724.421 381.751 721.762 383.871 720.703L414.657 705.325Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-39-inside-37_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("19B")}
          onClick={() => batchHandler("19B")}
          id="19B"
        >
          <mask id="path-40-inside-38_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M482.266 749.386C483.506 748.78 484.971 748.856 486.141 749.587L528.46 776.021C531.062 777.647 530.94 781.477 528.239 782.934L452.624 823.725C450.848 824.683 448.637 824.168 447.467 822.525L420.547 784.735C419.114 782.723 419.829 779.906 422.049 778.821L482.266 749.386Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M482.266 749.386C483.506 748.78 484.971 748.856 486.141 749.587L528.46 776.021C531.062 777.647 530.94 781.477 528.239 782.934L452.624 823.725C450.848 824.683 448.637 824.168 447.467 822.525L420.547 784.735C419.114 782.723 419.829 779.906 422.049 778.821L482.266 749.386Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-40-inside-38_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("20AB")}
          onClick={() => batchHandler("20AB")}
          id="20AB"
        >
          <mask id="path-41-inside-39_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M533.101 782.035C534.429 781.335 536.037 781.436 537.266 782.299L544.584 787.434C544.753 787.553 544.932 787.658 545.118 787.75L611.257 820.241C612.882 821.039 614.84 820.647 616.032 819.285L638.039 794.129C639.84 792.07 643.131 792.387 644.507 794.751L650.988 805.891C652.169 807.92 651.355 810.526 649.229 811.524L493.094 884.77C491.307 885.608 489.176 885.018 488.075 883.38L452.068 829.815C450.742 827.843 451.418 825.156 453.52 824.046L533.101 782.035Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M533.101 782.035C534.429 781.335 536.037 781.436 537.266 782.299L544.584 787.434C544.753 787.553 544.932 787.658 545.118 787.75L611.257 820.241C612.882 821.039 614.84 820.647 616.032 819.285L638.039 794.129C639.84 792.07 643.131 792.387 644.507 794.751L650.988 805.891C652.169 807.92 651.355 810.526 649.229 811.524L493.094 884.77C491.307 885.608 489.176 885.018 488.075 883.38L452.068 829.815C450.742 827.843 451.418 825.156 453.52 824.046L533.101 782.035Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-41-inside-39_316_87)"
          />
        </motion.g>
        <motion.path
          className="cursor-pointer hover:fill-[#609407] outline-none border-none"
          whileHover={() => setPreview("vendido")}
          onClick={() => batchHandler('vendido')}
          id="vendido"
          d="M651.257 811.954C653.39 810.945 654.191 808.318 652.983 806.291L644.33 791.768C643.458 790.304 643.609 788.449 644.706 787.145L699.495 722.043C701.203 720.015 704.376 720.178 705.865 722.372L726.824 753.238L799.456 872.244C800.761 874.383 799.801 877.181 797.458 878.069L752.176 895.218L568.028 992.533C566.246 993.475 564.041 992.944 562.884 991.293L493.196 891.893C491.773 889.863 492.52 887.041 494.761 885.981L651.257 811.954Z"
          fill="#D9D9D9"
          fill-opacity="0.63"
        />
        <motion.path
          className="cursor-pointer hover:fill-[#505e38] outline-none border-none"
          whileHover={() => {
            setPreview("Vías");
          }}
          onClick={() => {
            setBatchSelected(null);
            setStreetSelected(true);
          }}
          id="street"
          d="M340.012 968.729C341.887 967.625 344.3 968.221 345.444 970.072L406.91 1069.48C407.994 1071.24 410.232 1071.88 412.08 1070.97L542.227 1006.86C544.35 1005.82 545.106 1003.17 543.855 1001.16L529.324 977.835L507.829 942.845L470.382 890.086L464.346 883.681L412.598 812.117C412.461 811.927 412.306 811.749 412.138 811.586L410.198 809.71C409.995 809.514 409.814 809.297 409.657 809.063L382.915 769.219C382.427 768.492 382.191 767.624 382.243 766.75L382.309 765.66C382.36 764.8 382.133 763.946 381.66 763.225L362.623 734.22C361.298 732.201 362.051 729.477 364.225 728.425L373.733 723.824C375.553 722.944 377.743 723.559 378.838 725.259L415.937 782.837L447.994 827.49L489.523 890.683L557.458 987.081L562.069 993.116C563.25 994.661 565.369 995.134 567.094 994.236L749.49 899.357L930.057 834.341C932.408 833.494 933.416 830.722 932.157 828.563L855.517 697.114C854.727 695.759 853.083 695.159 851.606 695.687V695.687C850.134 696.213 848.496 695.62 847.702 694.273L834.457 671.8C833.21 669.685 834.146 666.955 836.43 666.051L853.194 659.41C855.078 658.663 857.223 659.444 858.186 661.228L947.159 825.999C948.102 827.747 950.185 828.537 952.051 827.856L1190.85 740.62L1419.59 654.656C1421.41 653.97 1423.47 654.701 1424.45 656.386L1431.86 669.091C1433.1 671.227 1432.13 673.971 1429.82 674.846L1371.24 697.022C1369.03 697.861 1368.02 700.427 1369.08 702.546L1387.04 738.617L1427.46 813.052L1480.56 922.479C1481.68 924.782 1480.38 927.529 1477.88 928.118L1462.54 931.746C1460.7 932.181 1458.8 931.265 1458 929.55L1449.51 911.426C1448.64 909.587 1449.48 907.399 1451.35 906.607V906.607C1453.32 905.772 1454.13 903.407 1453.07 901.544L1427.09 855.622L1352.93 708.101C1352.02 706.293 1349.91 705.449 1348 706.135L1261.34 737.346L1178.63 767.59C1176.37 768.414 1175.34 771.026 1176.44 773.164L1225.97 870.285C1226.21 870.743 1226.57 871.123 1227.01 871.38V871.38C1227.47 871.644 1227.84 872.039 1228.07 872.513L1273.22 964.689C1274.39 967.079 1272.95 969.925 1270.32 970.388L1252.83 973.475C1251.08 973.783 1249.34 972.902 1248.55 971.31L1227.47 928.713C1226.49 926.723 1227.48 924.322 1229.58 923.606V923.606C1231.72 922.879 1232.7 920.416 1231.65 918.419L1208.58 874.566L1173.41 804.48L1160.29 778.866C1159.36 777.056 1157.23 776.229 1155.32 776.945L954.814 852.28C952.577 853.12 951.571 855.722 952.661 857.849L991.472 933.59C992.351 935.307 994.331 936.151 996.179 935.598L997.865 935.093C999.743 934.53 1001.75 935.411 1002.61 937.174L1009.74 951.816C1010.74 953.876 1009.81 956.356 1007.7 957.249L990.022 964.74C988.114 965.549 985.905 964.767 984.931 962.938L976.59 947.284C976.1 946.364 976.504 945.221 977.464 944.815V944.815C978.42 944.41 978.826 943.275 978.344 942.356L937.958 865.326C937.035 863.565 934.959 862.75 933.084 863.412L774.431 919.441C774.246 919.506 774.067 919.585 773.895 919.676L754.804 929.758L583.557 1015.38C583.012 1015.66 582.412 1015.8 581.803 1015.81L579.612 1015.83C578.994 1015.83 578.387 1015.98 577.836 1016.26L430.387 1091.13C428.275 1092.2 427.552 1094.86 428.83 1096.85L463.956 1151.63L506.688 1216.9C507.938 1218.81 507.339 1221.38 505.371 1222.53L495.966 1228.07C494.127 1229.16 491.761 1228.6 490.591 1226.82L406.646 1098.83C406.303 1098.31 405.842 1097.87 405.301 1097.56L403.889 1096.74C403.368 1096.44 402.922 1096.03 402.583 1095.53L325.412 982.274C324.11 980.363 324.695 977.749 326.688 976.575L340.012 968.729Z"
          fill="#D9D9D9"
        />
        <motion.path
          className="cursor-pointer hover:fill-[#609407] outline-none border-none"
          whileHover={() => setPreview("vendido")}
          onClick={() => batchHandler('vendido')}
          id="vendido"
          d="M1054.78 519.541L1320.78 428.942C1322.61 428.318 1324.63 429.095 1325.57 430.787L1434.25 626.65C1434.93 627.879 1434.92 629.374 1434.22 630.591L1424.49 647.433C1424.03 648.24 1423.3 648.859 1422.42 649.183L954.398 822.671C952.535 823.362 950.448 822.581 949.496 820.837L834.351 609.824C833.194 607.704 834.165 605.051 836.416 604.178L1054.78 519.541Z"
          fill="#D9D9D9"
          fill-opacity="0.45"
        />
        <motion.path
          className="cursor-pointer outline-none hover:fill-[#609407] border-none"
          whileHover={() => setPreview("Zona verde")}
          id="green_zone"
          d="M1437.24 678.416C1437.66 678.268 1438.1 678.192 1438.55 678.191L1457.3 678.156C1458.73 678.153 1460.05 678.907 1460.76 680.136L1472.56 700.301C1473.83 702.464 1472.81 705.244 1470.45 706.088L1391.33 734.36C1389.42 735.041 1387.31 734.189 1386.4 732.375L1373.11 705.654C1372.04 703.499 1373.1 700.893 1375.37 700.097L1437.24 678.416Z"
          fill="#25B601"
        />
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("1A")}
          onClick={() => batchHandler("1A")}
          id="1A"
        >
          <mask id="path-46-inside-40_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1471.57 708.54C1473.46 707.88 1475.54 708.707 1476.45 710.479L1496.59 749.482C1497.7 751.631 1496.67 754.266 1494.39 755.082L1417.48 782.668C1415.61 783.341 1413.52 782.531 1412.59 780.769L1391.82 741.374C1390.68 739.212 1391.73 736.542 1394.03 735.733L1471.57 708.54Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1471.57 708.54C1473.46 707.88 1475.54 708.707 1476.45 710.479L1496.59 749.482C1497.7 751.631 1496.67 754.266 1494.39 755.082L1417.48 782.668C1415.61 783.341 1413.52 782.531 1412.59 780.769L1391.82 741.374C1390.68 739.212 1391.73 736.542 1394.03 735.733L1471.57 708.54Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-46-inside-40_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("1B")}
          onClick={() => batchHandler("1B")}
          id="1B"
        >
          <mask id="path-47-inside-41_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1498.51 755.469C1500.45 754.758 1502.62 755.646 1503.5 757.517L1522.66 798.082C1523.67 800.227 1522.61 802.778 1520.37 803.564L1443.33 830.626C1441.41 831.303 1439.28 830.42 1438.4 828.577L1419.51 789.052C1418.49 786.924 1419.53 784.382 1421.74 783.571L1498.51 755.469Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1498.51 755.469C1500.45 754.758 1502.62 755.646 1503.5 757.517L1522.66 798.082C1523.67 800.227 1522.61 802.778 1520.37 803.564L1443.33 830.626C1441.41 831.303 1439.28 830.42 1438.4 828.577L1419.51 789.052C1418.49 786.924 1419.53 784.382 1421.74 783.571L1498.51 755.469Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-47-inside-41_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("2A")}
          onClick={() => batchHandler("2A")}
          id="2A"
        >
          <mask id="path-48-inside-42_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1521.88 805.744C1523.81 805.083 1525.92 805.967 1526.79 807.8L1545.52 846.941C1546.55 849.088 1545.49 851.651 1543.24 852.441L1466.15 879.586C1464.24 880.26 1462.12 879.394 1461.23 877.572L1441.88 838.026C1440.82 835.865 1441.89 833.267 1444.17 832.485L1521.88 805.744Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1521.88 805.744C1523.81 805.083 1525.92 805.967 1526.79 807.8L1545.52 846.941C1546.55 849.088 1545.49 851.651 1543.24 852.441L1466.15 879.586C1464.24 880.26 1462.12 879.394 1461.23 877.572L1441.88 838.026C1440.82 835.865 1441.89 833.267 1444.17 832.485L1521.88 805.744Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-48-inside-42_316_87)"
          />
        </motion.g>
        <motion.g
          className="outline-none"
          whileHover={() => setPreview("2B")}
          onClick={() => batchHandler("2B")}
          id="2B"
        >
          <mask id="path-49-inside-43_316_87" fill="white">
            <motion.path
              className="cursor-pointer outline-none border-none"
              d="M1545.04 853.366C1547.01 852.644 1549.2 853.567 1550.06 855.479L1571.67 903.462C1572.72 905.793 1571.34 908.498 1568.84 909.02L1488.69 925.721C1486.85 926.105 1484.98 925.152 1484.22 923.431L1467.68 886.258C1466.74 884.143 1467.78 881.672 1469.96 880.876L1545.04 853.366Z"
            />
          </mask>
          <motion.path
            className="cursor-pointer outline-none border-none"
            whileHover={{ fill: "#609407" }}
            d="M1545.04 853.366C1547.01 852.644 1549.2 853.567 1550.06 855.479L1571.67 903.462C1572.72 905.793 1571.34 908.498 1568.84 909.02L1488.69 925.721C1486.85 926.105 1484.98 925.152 1484.22 923.431L1467.68 886.258C1466.74 884.143 1467.78 881.672 1469.96 880.876L1545.04 853.366Z"
            fill="white"
            stroke="#8EB34E"
            stroke-width="2"
            mask="url(#path-49-inside-43_316_87)"
          />
        </motion.g>
        <g id="container">
          <mask
            id="path-50-outside-44_316_87"
            maskUnits="userSpaceOnUse"
            x="-2.27697"
            y="-2.73205"
            width="1740.76"
            height="1707.09"
            fill="black"
          >
            <rect
              fill="white"
              x="-2.27697"
              y="-2.73205"
              width="1740.76"
              height="1707.09"
            />
            <path
              className="cursor-pointer outline-none border-none"
              d="M308.222 643.226C309.905 642.566 311.823 643.118 312.898 644.572L361.313 710.039C362.421 711.538 364.418 712.072 366.127 711.327L415.114 689.973C416.376 689.422 417.833 689.56 418.97 690.337L551.225 780.757L610.961 810.711C612.635 811.551 614.667 811.117 615.851 809.667L700.904 705.596L813.246 601.43C813.627 601.077 814.073 600.801 814.559 600.618L1073.19 503.522L1323.73 417.045C1325.57 416.412 1327.59 417.186 1328.53 418.882L1443.77 625.992L1550.52 832.572L1584.3 908.07C1585.35 910.419 1583.94 913.134 1581.41 913.629L842.93 1058.48L695.934 1106.29C695.65 1106.38 695.378 1106.5 695.122 1106.66L405.236 1279.61C403.429 1280.69 401.094 1280.18 399.897 1278.45L310.364 1149.01L223.193 1018.94C221.879 1016.98 222.54 1014.31 224.618 1013.19L359.416 940.524C361.51 939.395 362.162 936.699 360.815 934.738L203.321 705.436C202.074 703.621 202.529 701.139 204.339 699.884L256.776 663.52C257.031 663.343 257.305 663.197 257.594 663.084L308.222 643.226Z"
            />
          </mask>
          <path
            className="cursor-pointer outline-none border-none"
            d="M308.222 643.226C309.905 642.566 311.823 643.118 312.898 644.572L361.313 710.039C362.421 711.538 364.418 712.072 366.127 711.327L415.114 689.973C416.376 689.422 417.833 689.56 418.97 690.337L551.225 780.757L610.961 810.711C612.635 811.551 614.667 811.117 615.851 809.667L700.904 705.596L813.246 601.43C813.627 601.077 814.073 600.801 814.559 600.618L1073.19 503.522L1323.73 417.045C1325.57 416.412 1327.59 417.186 1328.53 418.882L1443.77 625.992L1550.52 832.572L1584.3 908.07C1585.35 910.419 1583.94 913.134 1581.41 913.629L842.93 1058.48L695.934 1106.29C695.65 1106.38 695.378 1106.5 695.122 1106.66L405.236 1279.61C403.429 1280.69 401.094 1280.18 399.897 1278.45L310.364 1149.01L223.193 1018.94C221.879 1016.98 222.54 1014.31 224.618 1013.19L359.416 940.524C361.51 939.395 362.162 936.699 360.815 934.738L203.321 705.436C202.074 703.621 202.529 701.139 204.339 699.884L256.776 663.52C257.031 663.343 257.305 663.197 257.594 663.084L308.222 643.226Z"
            stroke="#8EB34E"
            stroke-width="6"
            mask="url(#path-50-outside-44_316_87)"
          />
        </g>
      </motion.g>
    </svg>
  );
};
export default FlatComponentSVG;
