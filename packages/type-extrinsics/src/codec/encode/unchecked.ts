// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { EncodingVersions, SectionItem } from '@polkadot/params/types';
import { UncheckedRaw } from '@polkadot/primitives/extrinsic';
import { KeyringPair } from '@polkadot/util-keyring/types';
import { Extrinsics } from '../../types';

import u8aConcat from '@polkadot/util/u8a/concat';

import encode from './index';
import prefixes from './prefixes';
import encodeExtrinsic from './extrinsic';
import encodeParams from '@polkadot/params/encode';
import bnToU8a from '@polkadot/util/bn/toU8a';

export default function unchecked (
  pair: KeyringPair,
  index: number | BN,
  extrinsic: SectionItem<Extrinsics>,
  values: Array<any>,
  hash: Uint8Array,
  version: EncodingVersions = 'latest'
): UncheckedRaw {
  // const message = encodeExtrinsic(extrinsic, values, index, version);
  const era = prefixes.era;
  const nonce = bnToU8a(index, 64, true);
  const params = u8aConcat(extrinsic.index, encodeParams(extrinsic.params, values, version));

  const signature = pair.sign(u8aConcat(nonce, params, era, hash));

  return u8aConcat(
    prefixes.poc3Version,
    version === 'poc-1' ? prefixes.none : prefixes.publicKey,
    pair.publicKey(),
    signature,
    nonce,
    era,
    params
  );
}
