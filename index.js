/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Generator} from './tests/generator';

import {name as appName} from './app.json';
import {ScanScreen} from './tests/reader';
import {getlocation} from './tests/getlocation';
import {permissions} from './tests/permissions';
import {getadress} from './tests/getadress';
import AgendaScreen from './tests/agenda/agenda';

AppRegistry.registerComponent(appName, () => AgendaScreen);
