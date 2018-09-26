// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const contractFee: CreateItemOptions = {
  description: `The fee required to create a contract. At least as big as staking's ReclaimRebate.`,
  key: 'Contract ContractFee',
  params: [],
  type: 'Balance'
};

const callBaseFee: CreateItemOptions = {
  description: `The fee charged for a call into a contract.`,
  key: 'Contract CallBaseFee',
  params: [],
  type: 'Gas'
};

const createBaseFee: CreateItemOptions = {
  description: `The fee charged for a create of a contract.`,
  key: 'Contract CreateBaseFee',
  params: [],
  type: 'Gas'
};

const gasPrice: CreateItemOptions = {
  description: `The price of one unit of gas.`,
  key: 'Contract GasPrice',
  params: [],
  type: 'Balance'
};

const maxDepth: CreateItemOptions = {
  description: `The maximum nesting level of a call/create stack.`,
  key: 'Contract MaxDepth',
  params: [],
  type: 'u32'
};

const blockGasLimit: CreateItemOptions = {
  description: `The maximum amount of gas that could be expended per block.`,
  key: 'Contract BlockGasLimit',
  params: [],
  type: 'Gas'
};

const gasSpent: CreateItemOptions = {
  description: `Gas spent so far in this block.`,
  key: 'Contract GasSpent',
  params: [],
  type: 'Gas'
};

const codeOf: CreateItemOptions = {
  description: `The code associated with an account.`,
  key: 'Contract CodeOf',
  params: [param('who', 'AccountId')],
  type: ['Code']
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Contract',
    public: {
      contractFee: createMethod('contractFee')(contractFee),
      callBaseFee: createMethod('callBaseFee')(callBaseFee),
      createBaseFee: createMethod('createBaseFee')(createBaseFee),
      gasPrice: createMethod('gasPrice')(gasPrice),
      maxDepth: createMethod('maxDepth')(maxDepth),
      blockGasLimit: createMethod('blockGasLimit')(blockGasLimit),
      gasSpent: createMethod('gasSpent')(gasSpent),
      codeOf: createMethod('codeOf')(codeOf)
    }
  }));
