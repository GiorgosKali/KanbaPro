/* tslint:disable */
/* eslint-disable */
/**
 * KanbaPro API
 * The KanbaPro API description
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BoardEntity
 */
export interface BoardEntity {
    /**
     * The id of the board
     * @type {string}
     * @memberof BoardEntity
     */
    'id': string;
    /**
     * The title of the board
     * @type {string}
     * @memberof BoardEntity
     */
    'title': string;
    /**
     * The id of the user who owns the board
     * @type {string}
     * @memberof BoardEntity
     */
    'ownerId': string;
    /**
     * The user who owns the board
     * @type {object}
     * @memberof BoardEntity
     */
    'owner': object;
    /**
     * The date the board was created
     * @type {string}
     * @memberof BoardEntity
     */
    'createdAt': string;
    /**
     * The date the board was updated
     * @type {string}
     * @memberof BoardEntity
     */
    'updatedAt': string;
}
/**
 * 
 * @export
 * @interface CreateBoardDto
 */
export interface CreateBoardDto {
    /**
     * The title of the board
     * @type {string}
     * @memberof CreateBoardDto
     */
    'title': string;
}
/**
 * 
 * @export
 * @interface LoginDto
 */
export interface LoginDto {
    /**
     * The username of the user
     * @type {string}
     * @memberof LoginDto
     */
    'username': string;
    /**
     * The password of the user
     * @type {string}
     * @memberof LoginDto
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface RegisterDto
 */
export interface RegisterDto {
    /**
     * The name of the user
     * @type {string}
     * @memberof RegisterDto
     */
    'name': string;
    /**
     * The email of the user
     * @type {string}
     * @memberof RegisterDto
     */
    'email': string;
    /**
     * The username of the user
     * @type {string}
     * @memberof RegisterDto
     */
    'username': string;
    /**
     * The password of the user
     * @type {string}
     * @memberof RegisterDto
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface UpdateBoardDto
 */
export interface UpdateBoardDto {
    /**
     * The title of the board
     * @type {string}
     * @memberof UpdateBoardDto
     */
    'title'?: string;
}
/**
 * 
 * @export
 * @interface UserEntity
 */
export interface UserEntity {
    /**
     * The id of the user
     * @type {string}
     * @memberof UserEntity
     */
    'id': string;
    /**
     * The email of the user
     * @type {string}
     * @memberof UserEntity
     */
    'email': string;
    /**
     * The username of the user
     * @type {string}
     * @memberof UserEntity
     */
    'username': string;
    /**
     * The name of the user
     * @type {string}
     * @memberof UserEntity
     */
    'name': string;
    /**
     * The date the user was created
     * @type {string}
     * @memberof UserEntity
     */
    'createdAt': string;
    /**
     * The date the user was updated
     * @type {string}
     * @memberof UserEntity
     */
    'updatedAt': string;
    /**
     * The password of the user
     * @type {string}
     * @memberof UserEntity
     */
    'password': string;
    /**
     * The boards of the user
     * @type {Array<BoardEntity>}
     * @memberof UserEntity
     */
    'boards': Array<BoardEntity>;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogin: async (loginDto: LoginDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginDto' is not null or undefined
            assertParamExists('authControllerLogin', 'loginDto', loginDto)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RegisterDto} registerDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerRegister: async (registerDto: RegisterDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerDto' is not null or undefined
            assertParamExists('authControllerRegister', 'registerDto', registerDto)
            const localVarPath = `/auth/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerLogin(loginDto: LoginDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerLogin(loginDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {RegisterDto} registerDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerRegister(registerDto: RegisterDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerRegister(registerDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogin(loginDto: LoginDto, options?: any): AxiosPromise<void> {
            return localVarFp.authControllerLogin(loginDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {RegisterDto} registerDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerRegister(registerDto: RegisterDto, options?: any): AxiosPromise<void> {
            return localVarFp.authControllerRegister(registerDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {LoginDto} loginDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerLogin(loginDto: LoginDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerLogin(loginDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {RegisterDto} registerDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerRegister(registerDto: RegisterDto, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerRegister(registerDto, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * BoardApi - axios parameter creator
 * @export
 */
export const BoardApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateBoardDto} createBoardDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerCreate: async (createBoardDto: CreateBoardDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createBoardDto' is not null or undefined
            assertParamExists('boardControllerCreate', 'createBoardDto', createBoardDto)
            const localVarPath = `/board`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createBoardDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/board`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerFindOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('boardControllerFindOne', 'id', id)
            const localVarPath = `/board/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerRemove: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('boardControllerRemove', 'id', id)
            const localVarPath = `/board/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateBoardDto} updateBoardDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerUpdate: async (id: string, updateBoardDto: UpdateBoardDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('boardControllerUpdate', 'id', id)
            // verify required parameter 'updateBoardDto' is not null or undefined
            assertParamExists('boardControllerUpdate', 'updateBoardDto', updateBoardDto)
            const localVarPath = `/board/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateBoardDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BoardApi - functional programming interface
 * @export
 */
export const BoardApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BoardApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateBoardDto} createBoardDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async boardControllerCreate(createBoardDto: CreateBoardDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BoardEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.boardControllerCreate(createBoardDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async boardControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BoardEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.boardControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async boardControllerFindOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BoardEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.boardControllerFindOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async boardControllerRemove(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BoardEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.boardControllerRemove(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateBoardDto} updateBoardDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async boardControllerUpdate(id: string, updateBoardDto: UpdateBoardDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BoardEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.boardControllerUpdate(id, updateBoardDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BoardApi - factory interface
 * @export
 */
export const BoardApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BoardApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateBoardDto} createBoardDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerCreate(createBoardDto: CreateBoardDto, options?: any): AxiosPromise<BoardEntity> {
            return localVarFp.boardControllerCreate(createBoardDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerFindAll(options?: any): AxiosPromise<Array<BoardEntity>> {
            return localVarFp.boardControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerFindOne(id: string, options?: any): AxiosPromise<BoardEntity> {
            return localVarFp.boardControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerRemove(id: string, options?: any): AxiosPromise<BoardEntity> {
            return localVarFp.boardControllerRemove(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateBoardDto} updateBoardDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boardControllerUpdate(id: string, updateBoardDto: UpdateBoardDto, options?: any): AxiosPromise<BoardEntity> {
            return localVarFp.boardControllerUpdate(id, updateBoardDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BoardApi - object-oriented interface
 * @export
 * @class BoardApi
 * @extends {BaseAPI}
 */
export class BoardApi extends BaseAPI {
    /**
     * 
     * @param {CreateBoardDto} createBoardDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public boardControllerCreate(createBoardDto: CreateBoardDto, options?: AxiosRequestConfig) {
        return BoardApiFp(this.configuration).boardControllerCreate(createBoardDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public boardControllerFindAll(options?: AxiosRequestConfig) {
        return BoardApiFp(this.configuration).boardControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public boardControllerFindOne(id: string, options?: AxiosRequestConfig) {
        return BoardApiFp(this.configuration).boardControllerFindOne(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public boardControllerRemove(id: string, options?: AxiosRequestConfig) {
        return BoardApiFp(this.configuration).boardControllerRemove(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {UpdateBoardDto} updateBoardDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public boardControllerUpdate(id: string, updateBoardDto: UpdateBoardDto, options?: AxiosRequestConfig) {
        return BoardApiFp(this.configuration).boardControllerUpdate(id, updateBoardDto, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerGetAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerGetOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('userControllerGetOne', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerGetUserBoards: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('userControllerGetUserBoards', 'id', id)
            const localVarPath = `/users/{id}/boards`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerGetAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerGetAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerGetOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerGetOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerGetUserBoards(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BoardEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerGetUserBoards(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerGetAll(options?: any): AxiosPromise<Array<UserEntity>> {
            return localVarFp.userControllerGetAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerGetOne(id: string, options?: any): AxiosPromise<UserEntity> {
            return localVarFp.userControllerGetOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerGetUserBoards(id: string, options?: any): AxiosPromise<Array<BoardEntity>> {
            return localVarFp.userControllerGetUserBoards(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public userControllerGetAll(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).userControllerGetAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public userControllerGetOne(id: string, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).userControllerGetOne(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public userControllerGetUserBoards(id: string, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).userControllerGetUserBoards(id, options).then((request) => request(this.axios, this.basePath));
    }
}



