import {Excel} from '@/components/excel/Excel';
import { Table } from './components/table/Table';
import { Header } from './components/header/Header';
import { Formula } from './components/formula/Formula';
import { Toolbar } from './components/toolbar/Toolbar';
import './scss/index.scss'

const excel = new Excel('#app', {
 components: [Header, Toolbar, Formula, Table]
})

excel.render();
