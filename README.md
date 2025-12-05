# @celavi/badge

Badge signature Celavi pour sites web React + Tailwind.

## Installation

### Depuis GitHub (sans npm registry)

```bash
# Avec npm
npm install github:vinzcelavi/celavi-badge

# Avec yarn
yarn add github:vinzcelavi/celavi-badge

# Avec pnpm
pnpm add github:vinzcelavi/celavi-badge
```

### Depuis une release spécifique

```bash
npm install github:vinzcelavi/celavi-badge#v1.0.0
```

## Prérequis

Ce package nécessite les peer dependencies suivantes :

- `react` >= 18.0.0
- `react-dom` >= 18.0.0  
- `tailwindcss` >= 3.0.0

## Configuration Tailwind

Le composant utilise des classes custom (`animate-spin-slow`, `h-4.5`). Ajoute la config dans ton `tailwind.config.ts` :

```typescript
import { celaviTailwindConfig } from '@celavi/badge';

export default {
  content: [
    // ... tes paths
    './node_modules/@celavi/badge/dist/**/*.{js,mjs}', // Important !
  ],
  theme: {
    extend: {
      ...celaviTailwindConfig.theme.extend,
      // ... tes autres extensions
    },
  },
};
```

Ou manuellement :

```typescript
export default {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
};
```

## Utilisation

```tsx
import { CelaviBadge } from '@celavi/badge';

function App() {
  return (
    <div>
      {/* ... ton contenu */}
      <CelaviBadge />
    </div>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'bottom-right' \| 'bottom-left'` | `'bottom-right'` | Position du badge |
| `className` | `string` | - | Classes CSS additionnelles |
| `textColorClass` | `string` | `'text-foreground'` | Classe de couleur du texte |
| `hoverColorClass` | `string` | `'hover:text-white/80'` | Classe de couleur au hover |

### Exemples

```tsx
// Position à gauche
<CelaviBadge position="bottom-left" />

// Couleurs custom
<CelaviBadge 
  textColorClass="text-gray-600" 
  hoverColorClass="hover:text-gray-900" 
/>

// Classes additionnelles
<CelaviBadge className="opacity-75" />
```

### Utiliser uniquement l'icône

```tsx
import { CelaviIcon } from '@celavi/badge';

<CelaviIcon className="w-6 h-6 text-purple-500" />
```

## Développement

```bash
# Cloner le repo
git clone https://github.com/vinzcelavi/celavi-badge.git
cd celavi-badge

# Installer les dépendances
npm install

# Build
npm run build

# Watch mode
npm run dev
```

## License

MIT © Vincent Bianciotto
