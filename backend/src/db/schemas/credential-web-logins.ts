// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const CredentialWebLoginsSchema = z.object({
  id: z.string().uuid(),
  credentialId: z.string().uuid().default("00000000-0000-0000-0000-000000000000"),
  name: z.string(),
  userId: z.string().uuid(),
  orgId: z.string().uuid(),
  website: z.string(),
  username: z.string(),
  encryptedPassword: z.string(),
  encryptedPasswordIV: z.string(),
  encryptedPasswordTag: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TCredentialWebLogins = z.infer<typeof CredentialWebLoginsSchema>;
export type TCredentialWebLoginsInsert = Omit<z.input<typeof CredentialWebLoginsSchema>, TImmutableDBKeys>;
export type TCredentialWebLoginsUpdate = Partial<Omit<z.input<typeof CredentialWebLoginsSchema>, TImmutableDBKeys>>;
