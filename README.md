# DWU CRM Shared

Biblioteca de tipos, enums, validações e i18n compartilhados (`@dwu-it-solutions/crm-shared`) entre os projetos do ecossistema DWU CRM.

## Estrutura do Projeto

```
src/
├── constants/
├── enums/
├── i18n/
├── types/
├── utils/
└── validations/
```

## Instalação

```bash
npm install @dwu-it-solutions/crm-shared
```

## Desenvolvimento

```bash
npm install
npm run build
```

### Variáveis de ambiente

```bash
cp .env.example .env.local
```

- Defina `NPM_TOKEN` apenas via **GitHub Secrets** ou no seu ambiente local quando publicar.
- `NPM_REGISTRY` e `NPM_PUBLISH_TAG` podem ser sobreescritos em workflows via Variables.

## i18n Compartilhado

### Uso no Backend (NestJS)

```ts
import { I18nModule, QueryResolver } from 'nestjs-i18n';
import { translations, defaultLanguage } from '@dwu-it-solutions/crm-shared/i18n';

I18nModule.forRoot({
  fallbackLanguage: defaultLanguage,
  loader: {
    provide: 'I18N_TRANSLATIONS',
    useValue: translations
  },
  resolvers: [{ use: QueryResolver, options: ['lang', 'locale'] }]
});
```

### Uso no Frontend (React)

```ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations, defaultLanguage } from '@dwu-it-solutions/crm-shared/i18n';

i18n.use(initReactI18next).init({
  resources: translations,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: { escapeValue: false }
});
```

## Branches

- `main` - Branch principal (publica automaticamente)
- `feature/*` - Features (não publica)

**Nota:** Este pacote usa apenas `main` + `feature/*` (sem development/staging), pois é uma biblioteca e não precisa de múltiplos ambientes. O versionamento (v1.0.0, v1.0.0-beta) já resolve diferentes estágios de maturidade.

