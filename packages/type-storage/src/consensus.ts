// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from '@polkadot/storage/types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

// @TODO 不确定是否存在这个方法
const originalAuthorities: CreateItemOptions = {
  description: 'Authorities set actual at the block execution start. IsSome only if the set has been changed.',
  key: 'Consensus OriginalAuthorities',
  params: [],
  type: 'SessionKey'
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Consensus',
    public: {
      originalAuthorities:
        createMethod('originalAuthorities')(originalAuthorities)
    }
  }));
