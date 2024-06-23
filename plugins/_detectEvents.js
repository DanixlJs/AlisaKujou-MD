import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import path from 'path';
import { WAMessageStubType } from '@whiskeysockets/baileys';
export async function before(m, { conn, participants, groupMetadata }) {
    if (!m.messageStubType || !m.isGroup) return;
console.log("❀ EVENTO DETECTADO:\n", {
        messageStubType: m.messageStubType,
        messageStubParameters: m.messageStubParameters,
        type: WAMessageStubType[m.messageStubType],
    });
}