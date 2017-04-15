import React from 'react';
import { Card, Tab } from 'react-router-navigation';

const Fabric = {
    Cards: (prepareCards) => {
        const cards = prepareCards();

        return cards.map(card =>
            <Card
                key    = {card.path}
                exact  = {card.isExact}
                path   = {card.path}
                title  = {card.title || ''}
                render = {card.render}
            />
        );
    },
    Tabs: (prepareTabs) => {
        const tabs = prepareTabs();

        return tabs.map(tab =>
            <Tab
                key    = {tab.path}
                path   = {tab.path}
                label  = {tab.label}
                render = {tab.render}
            />
        );
    }
};

export default Fabric;
