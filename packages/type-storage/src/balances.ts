// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const totalIssuance: CreateItemOptions = {
  description: `The total amount of stake on the system.`,
  key: 'Balances TotalIssuance',
  params: [],
  type: 'Balance'
};

const existentialDeposit: CreateItemOptions = {
  description: `The minimum amount allowed to keep an account open.`,
  key: 'Balances ExistentialDeposit',
  params: [],
  type: 'Balance'
};

const reclaimRebate: CreateItemOptions = {
  description: `The amount credited to a destination's account whose index was reclaimed.`,
  key: 'Balances ReclaimRebate',
  params: [],
  type: 'Balance'
};

const transferFee: CreateItemOptions = {
  description: `The fee required to make a transfer.`,
  key: 'Balances TransferFee',
  params: [],
  type: 'Balance'
};

const creationFee: CreateItemOptions = {
  description: `The fee required to create an account. At least as big as ReclaimRebate.`,
  key: 'Balances CreationFee',
  params: [],
  type: 'Balance'
};

const nextEnumSet: CreateItemOptions = {
  description: `The next free enumeration set.`,
  key: 'Balances NextEnumSet',
  params: [],
  type: 'AccountIndex'
};

const enumSet: CreateItemOptions = {
  description: `The enumeration sets.`,
  key: 'Balances EnumSet',
  params: [param('index', 'AccountIndex')],
  type: ['AccountId']
};

const freeBalance: CreateItemOptions = {
  description: `The 'free' balance of a given account.`,
  key: 'Balances FreeBalance',
  params: [param('who', 'AccountId')],
  type: 'Balance'
};

const reservedBalance: CreateItemOptions = {
  description: `The amount of the balance of a given account that is exterally reserved; this can still get slashed, but gets slashed last of all.`,
  key: 'Balances ReservedBalance',
  params: [param('who', 'AccountId')],
  type: 'Balance'
};

const transactionBaseFee: CreateItemOptions = {
  description: `The fee to be paid for making a transaction; the base.`,
  key: 'Balances TransactionBaseFee',
  params: [],
  type: 'Balance'
};

const transactionByteFee: CreateItemOptions = {
  description: `The fee to be paid for making a transaction; the per-byte portion.`,
  key: 'Balances TransactionByteFee',
  params: [],
  type: 'Balance'
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Balances',
    public: {
      totalIssuance: createMethod('totalIssuance')(totalIssuance),
      existentialDeposit: createMethod('existentialDeposit')(existentialDeposit),
      reclaimRebate: createMethod('reclaimRebate')(reclaimRebate),
      transferFee: createMethod('transferFee')(transferFee),
      creationFee: createMethod('creationFee')(creationFee),
      nextEnumSet: createMethod('nextEnumSet')(nextEnumSet),
      enumSet: createMethod('enumSet')(enumSet),
      freeBalance: createMethod('freeBalance')(freeBalance),
      reservedBalance: createMethod('reservedBalance')(reservedBalance),
      transactionBaseFee: createMethod('transactionBaseFee')(transactionBaseFee),
      transactionByteFee: createMethod('transactionByteFee')(transactionByteFee)
    }
  }));
