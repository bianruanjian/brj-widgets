const { describe, it } = intern.getInterface('bdd');

import { w, v } from '@dojo/widget-core/d';
import harness from '@dojo/test-extras/harness';
import Button from './../widgets/Button';
import { EditableWidgetProperties } from 'widget-core-designer/interfaces';
import * as css from './../widgets/styles/Button.m.css';

describe('Button', () => {
    it('should construct Button', () => {
        const prop : EditableWidgetProperties = {widget:{id:'1',widgetId:1,widgetName:'1',parentId:'root',properties:{widgetId:'1',value:'a', id: '1'}}, onFocus:function(){}, activeWidgetId:'1'};
		const h = harness(() => w(Button, prop));
		h.expect(() =>
			v(
				'div',
				{
					key: 'root',
					classes: [
						'btn',
						css.root,
						undefined,
						undefined,
						undefined,
						undefined
					],
					disabled: false,
					type: undefined,
					onmouseup: () => {}
				},
				['a']
			)
		);
	});
});