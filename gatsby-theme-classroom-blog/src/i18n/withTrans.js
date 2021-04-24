import React from 'react';
import i18next from './config-internal';
import { I18nextProvider, withTranslation } from 'react-i18next';

export function withTrans(WrappedComponent) {
    WrappedComponent = withTranslation()(WrappedComponent);
    return (props) => (
        <I18nextProvider i18n={i18next}>
            <WrappedComponent {...props} language={i18next.language} />
        </I18nextProvider>
    )
}