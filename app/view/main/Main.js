/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('FrontEnd.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'homerecipedataview'
            }]
        },{
            title: 'Kitchen Hub',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            items: [{
                xtype: 'managementgrids',
                items: [
                    {
                        title: 'Ingredients',
                        layout: 'fit',
                        items: [{
                            xtype: 'gridingredient'
                        }],
                        cls: 'card'
                    },
                    {
                        title: 'Recipes',
                        html : 'A TabPanel can use different animations by setting <code>layout.animation.</code>',
                        cls: 'card'
                    },
                    {
                        title: 'Other',
                        html : '<span class="action">User tapped Tab 3</span>',
                        cls: 'card'
                    }
                ]
            }]
        },{
            title: 'User',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});