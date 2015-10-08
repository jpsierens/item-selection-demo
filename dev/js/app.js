/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

import React from 'react';
import SearchableTable from './SearchableTable';
import {data} from './data';

// Filterable CheatSheet Component
React.render(<SearchableTable data={data}/>, document.getElementById('searchable-table'));


