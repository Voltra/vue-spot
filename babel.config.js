module.exports = function(api){
    api.cache(false);
    
    const presets = [
        ["@babel/preset-env", {
            targets: "> 0.25%, not dead",
            modules: "umd"
        }]
    ];
    
    const plugins = [
        "@babel/plugin-syntax-jsx",
        "babel-plugin-transform-vue-jsx",
        "babel-plugin-jsx-v-model",
        "babel-plugin-transform-class-properties",
        "babel-plugin-transform-do-expressions",
        "babel-plugin-transform-function-bind",
    ];
    
    return {
        presets,
        plugins,
    };
};