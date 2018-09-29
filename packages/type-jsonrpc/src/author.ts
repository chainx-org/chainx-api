// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, CreateItemOptionsMap, Section, SectionItems } from '@polkadot/params/types';
import { Interfaces, Interface$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const submitRichExtrinsic: CreateItemOptions = {
  isSigned: true,
  description: 'Submit extrinsic for inclusion in block',
  params: [param('extrinsic', 'Bytes')],
  type: 'Hash'
};

const submitExtrinsic: CreateItemOptions = {
  isSigned: true,
  description: 'Submit a fully formatted extrinsic for block inclusion',
  params: [param('bytes', 'Bytes')],
  type: 'Hash'
};

const pendingExtrinsics: CreateItemOptions = {
  description: 'Returns all pending extrinsics, potentially grouped by sender',
  params: [],
  type: 'PrendingExtrinsics'
};

const extrinsicUpdate: CreateItemOptions = {
  description: '',
  subscribe: [
    'author_submitAndWatchExtrinsic',
    'author_unwatchExtrinsic'
  ],
  params: [],
  type: 'Hash'
};

const privateMethods: CreateItemOptionsMap = {};

const publicMethods: CreateItemOptionsMap = {
  submitRichExtrinsic,
  submitExtrinsic,
  pendingExtrinsics
};

export type PrivateMethods = typeof privateMethods;
export type PublicMethods = typeof publicMethods;

/**
 * @summary Methods to work with authors & contributors.
 */
export default (name: Interface$Sections): Section<Interfaces, PrivateMethods, PublicMethods> =>
  createSection(name)((createMethod: CreateItems<Interfaces>) => ({
    description: 'Substrate authoring RPC API',
    public: Object.keys(publicMethods).reduce(
      (result, key) => {
        result[key] = createMethod(key)(publicMethods[key]);

        return result;
      },
      {} as SectionItems<Interfaces, PublicMethods>
    )
  }));
