[@breautek/storm](../README.md) / [InvalidConfigError](../modules/invalidconfigerror.md) / InvalidConfigError

# Class: InvalidConfigError<TConfig\>

[InvalidConfigError](../modules/invalidconfigerror.md).InvalidConfigError

## Type parameters

| Name | Type |
| :------ | :------ |
| `TConfig` | [*IConfig*](../interfaces/iconfig.iconfig-1.md) |

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)<IInvalidConfigErrorDetails<TConfig\>\>

  ↳ **InvalidConfigError**

## Table of contents

### Constructors

- [constructor](invalidconfigerror.invalidconfigerror-1.md#constructor)

### Properties

- [message](invalidconfigerror.invalidconfigerror-1.md#message)
- [name](invalidconfigerror.invalidconfigerror-1.md#name)
- [stack](invalidconfigerror.invalidconfigerror-1.md#stack)
- [prepareStackTrace](invalidconfigerror.invalidconfigerror-1.md#preparestacktrace)
- [stackTraceLimit](invalidconfigerror.invalidconfigerror-1.md#stacktracelimit)

### Methods

- [getCode](invalidconfigerror.invalidconfigerror-1.md#getcode)
- [getErrorResponse](invalidconfigerror.invalidconfigerror-1.md#geterrorresponse)
- [getExitCode](invalidconfigerror.invalidconfigerror-1.md#getexitcode)
- [getHTTPCode](invalidconfigerror.invalidconfigerror-1.md#gethttpcode)
- [getMessage](invalidconfigerror.invalidconfigerror-1.md#getmessage)
- [getPrivateDetails](invalidconfigerror.invalidconfigerror-1.md#getprivatedetails)
- [getPublicDetails](invalidconfigerror.invalidconfigerror-1.md#getpublicdetails)
- [captureStackTrace](invalidconfigerror.invalidconfigerror-1.md#capturestacktrace)

## Constructors

### constructor

\+ **new InvalidConfigError**<TConfig\>(`config`: TConfig, `errors`: *ErrorObject*<string, Record<string, any\>, unknown\>[]): [*InvalidConfigError*](invalidconfigerror.invalidconfigerror-1.md)<TConfig\>

#### Type parameters:

| Name | Type |
| :------ | :------ |
| `TConfig` | [*IConfig*](../interfaces/iconfig.iconfig-1.md) |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `config` | TConfig |
| `errors` | *ErrorObject*<string, Record<string, any\>, unknown\>[] |

**Returns:** [*InvalidConfigError*](invalidconfigerror.invalidconfigerror-1.md)<TConfig\>

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidConfigError.ts:29](https://github.com/breautek/storm/blob/2614a1c/src/InvalidConfigError.ts#L29)

## Properties

### message

• **message**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[message](stormerror.stormerror-1.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[name](stormerror.stormerror-1.md#name)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[stack](stormerror.stormerror-1.md#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:11

Inherited from: [StormError](stormerror.stormerror-1.md).[prepareStackTrace](stormerror.stormerror-1.md#preparestacktrace)

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Inherited from: [StormError](stormerror.stormerror-1.md).[stackTraceLimit](stormerror.stormerror-1.md#stacktracelimit)

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): [*ErrorCode*](../enums/errorcode.errorcode-1.md)

**Returns:** [*ErrorCode*](../enums/errorcode.errorcode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidConfigError.ts:42](https://github.com/breautek/storm/blob/2614a1c/src/InvalidConfigError.ts#L42)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:70](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [*ExitCode*](../enums/exitcode.exitcode-1.md)

**Returns:** [*ExitCode*](../enums/exitcode.exitcode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidConfigError.ts:50](https://github.com/breautek/storm/blob/2614a1c/src/InvalidConfigError.ts#L50)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidConfigError.ts:46](https://github.com/breautek/storm/blob/2614a1c/src/InvalidConfigError.ts#L46)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidConfigError.ts:37](https://github.com/breautek/storm/blob/2614a1c/src/InvalidConfigError.ts#L37)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *IInvalidConfigErrorDetails*<TConfig\>

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *IInvalidConfigErrorDetails*<TConfig\>

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:54](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L54)

___

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

| Name | Type |
| :------ | :------ |
| `targetObject` | *object* |
| `constructorOpt?` | Function |

**Returns:** *void*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: node_modules/@types/node/globals.d.ts:4
