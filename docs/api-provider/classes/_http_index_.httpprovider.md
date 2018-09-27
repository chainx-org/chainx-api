

The HTTP Provider allows sending requests using HTTP. it does not support subscriptions so you won´t be able to listen to events such as new blocks or balance changes. It is usually preferrable using the [WsProvider](_ws_index_.wsprovider.md).
*__example__*: ```javascript
import createApi from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9933');
const api = createApi(provider);
```

*__see__*: [WsProvider](_ws_index_.wsprovider.md)

# Hierarchy

**HttpProvider**

# Implements

* [ProviderInterface](../interfaces/_types_d_.providerinterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new HttpProvider**(endpoint: *`string`*): [HttpProvider](_http_index_.httpprovider.md)

<<<<<<< HEAD
*Defined in [http/index.ts:35](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/http/index.ts#L35)*
=======
*Defined in [http/index.ts:36](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/http/index.ts#L36)*
>>>>>>> upstream/master

**Parameters:**

| Param | Type |
| ------ | ------ |
| endpoint | `string` |

**Returns:** [HttpProvider](_http_index_.httpprovider.md)

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[isConnected](../interfaces/_types_d_.providerinterface.md#isconnected)*

<<<<<<< HEAD
*Defined in [http/index.ts:49](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/http/index.ts#L49)*
=======
*Defined in [http/index.ts:50](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/http/index.ts#L50)*
>>>>>>> upstream/master

Whether the node is connected or not.

**Returns:** `boolean`
true if connected

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb)*): `void`

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[on](../interfaces/_types_d_.providerinterface.md#on)*

<<<<<<< HEAD
*Defined in [http/index.ts:56](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/http/index.ts#L56)*
=======
*Defined in [http/index.ts:57](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/http/index.ts#L57)*
>>>>>>> upstream/master

Events are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_d_.md#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../modules/_types_d_.md#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[send](../interfaces/_types_d_.providerinterface.md#send)*

<<<<<<< HEAD
*Defined in [http/index.ts:60](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/http/index.ts#L60)*
=======
*Defined in [http/index.ts:61](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/http/index.ts#L61)*
>>>>>>> upstream/master

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(types: *`string`*, method: *`string`*, params: *`Array`<`any`>*, cb: *[ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback)*): `Promise`<`number`>

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[subscribe](../interfaces/_types_d_.providerinterface.md#subscribe)*

<<<<<<< HEAD
*Defined in [http/index.ts:82](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/http/index.ts#L82)*
=======
*Defined in [http/index.ts:83](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/http/index.ts#L83)*
>>>>>>> upstream/master

Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| types | `string` |
| method | `string` |
| params | `Array`<`any`> |
| cb | [ProviderInterface$Callback](../modules/_types_d_.md#providerinterface_callback) |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Implementation of [ProviderInterface](../interfaces/_types_d_.providerinterface.md).[unsubscribe](../interfaces/_types_d_.providerinterface.md#unsubscribe)*

<<<<<<< HEAD
*Defined in [http/index.ts:91](https://github.com/chainx-org/chainx-api/blob/30f27c6/packages/api-provider/src/http/index.ts#L91)*
=======
*Defined in [http/index.ts:92](https://github.com/polkadot-js/api/blob/dfd2e70/packages/api-provider/src/http/index.ts#L92)*
>>>>>>> upstream/master

Subscriptions are not supported with the HttpProvider, see [WsProvider](_ws_index_.wsprovider.md).

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

