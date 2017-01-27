'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    containerModal: {
        position: 'fixed',
        height: window.innerHeight,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: '999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal: {
        borderRadius: '2px',
        minWidth: '30%',
        maxWidth: '80%',
        minHeight: '20vh',
        maxHeight: '70vh',
        backgroundColor: '#fff',

        header: {
            borderBottom: '1 px solid #cecece',
            backgroundColor: '#0288d1',
            minHeight: 30,
            padding: '5px 2%',
            color: '#fff',
            display: 'flex'
        },

        title: {
            margin: 0,
            fontSize: '1rem',
            textAlign: 'center',
            lineHeight: '30px',
            flex: 1
        },

        body: {
            padding: '2%'
        }
    }
};