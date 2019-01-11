/** @format */

 import {AppRegistry} from 'react-native';
//  import App from './App';
 import {name as appName} from './app.json';

import applyDecoratedDescriptor from '@babel/runtime/helpers/esm/applyDecoratedDescriptor'
import initializerDefineProperty from '@babel/runtime/helpers/esm/initializerDefineProperty'

Object.assign(babelHelpers, {
  applyDecoratedDescriptor,
  initializerDefineProperty,
});
const App = require('./App').default
// // require('./android/app/src');
// require('./src');
 AppRegistry.registerComponent(appName, () => App);



