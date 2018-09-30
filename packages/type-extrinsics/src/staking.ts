// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Extrinsics, Extrinsic$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const stake: CreateItemOptions = {
  description: 'Stake',
  params: [],
  type: []
};

const unstake: CreateItemOptions = {
  description: 'Unstake',
  params: [param('intentionsIndex', 'u32')],
  type: []
};

const nominate: CreateItemOptions = {
  description: 'Nominate',
  params: [param('target', 'AccountId')],
  type: []
};

const unnominate: CreateItemOptions = {
  description: 'Unnominate',
  params: [param('targetIndex', 'u32')],
  type: []
};

const registerPreferences: CreateItemOptions = {
  description: 'Nominate',
  params: [param('intentionsIndex', 'u32'), param('prefs', 'Balance')],
  type: []
};

export default (name: Extrinsic$Sections, index: number): Section<Extrinsics, any, any> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Staking',
    public: {
      stake: createMethod('stake', 0)(stake),
      unstake: createMethod('unstake', 1)(unstake),
      nominate: createMethod('nominate', 2)(nominate),
      unnominate: createMethod('unnominate', 3)(unnominate),
      registerPreferences: createMethod('registerPreferences', 4)(registerPreferences)
    }
  }));
