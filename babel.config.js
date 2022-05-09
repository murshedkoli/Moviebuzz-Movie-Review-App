module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
    presets: ['module:metro-react-native-babel-preset'],

    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};