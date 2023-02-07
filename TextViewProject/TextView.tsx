import {requireNativeComponent} from 'react-native';

/**
 * Composes `View`.
 *
 * - text: string
 * - color: string
 */
export const TextView = requireNativeComponent<{ text: string }>('TextView');