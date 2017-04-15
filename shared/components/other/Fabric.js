import React, { Component } from 'react';
import { Navigation, Card, Tabs, Tab } from 'react-router-navigation';

const Fabric = {
    Cards: (prepareCards) => {
        const cards = prepareCards();

        return cards.map(card =>
            <Card
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
                path   = {tab.path}
                label  = {tab.label}
                render = {tab.render}
            />
        );
    }
};

export default Fabric;
