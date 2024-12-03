const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    config.resolver = {
        ...config.resolver,
        assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...config.resolver.sourceExts, 'svg', 'cjs'], // Add support for SVG and CJS files
    };

    config.transformer = {
        ...config.transformer,
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    };

    return config;
})();
