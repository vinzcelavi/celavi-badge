/**
 * Configuration Tailwind à ajouter dans le projet hôte
 * 
 * Ajoute ces configurations dans ton tailwind.config.js/ts :
 */

export const celaviTailwindConfig = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      spacing: {
        '4.5': '1.125rem', // 18px - pour h-4.5
      },
    },
  },
};

/**
 * Exemple d'utilisation dans tailwind.config.ts :
 * 
 * import { celaviTailwindConfig } from '@celavi/badge';
 * 
 * export default {
 *   // ... ton config
 *   theme: {
 *     extend: {
 *       ...celaviTailwindConfig.theme.extend,
 *       // ... tes autres extensions
 *     },
 *   },
 * };
 */
