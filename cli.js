#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

console.log("Halo! Aplikasi Luna Content Creation berhasil dijalankan.");
console.log("Memulai 'npm run dev'...\n");

// Mendapatkan jalur folder tempat file cli.js ini berada (F:\htdocs\luna-content-creation)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const npmCmd = 'npm';

const child = spawn(npmCmd, ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname // <--- INI KUNCINYA: Memaksa npm berjalan di folder projek Luna, di mana pun Anda memanggilnya
});

child.on('error', (err) => {
  console.error("Gagal menjalankan npm run dev:", err);
});