import { blake3 } from '@noble/hashes/blake3.js';

export function convertHexToBin(hex: string) {
  return hex
    .trim()
    .split('')
    .map(byte => Number.parseInt(byte, 16).toString(2).padStart(4, '0'))
    .join('');
}

export function BLAKE3(message: string): string {
  const hash = blake3(new TextEncoder().encode(message));
  return Array.from(hash)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}
