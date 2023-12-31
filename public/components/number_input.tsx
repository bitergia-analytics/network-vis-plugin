/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Bitergia requires contributions made to this file be 
 * licensed under the Apache-2.0 license or a compatible
 * open source license.
 *
 * Any modifications Copyright Bitergia.
 */

/*
 * Licensed to David Moreno under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. David Moreno licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { EuiFormRow, EuiFieldNumber} from '@elastic/eui';

interface NumberInputOptionProps<ParamName extends string> {
  disabled?: boolean;
  helpText?: React.ReactNode;
  error?: React.ReactNode;
  isInvalid?: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  paramName: ParamName;
  value?: string;
  'data-test-subj'?: string;
  setValue: (paramName: ParamName, value: string) => void;
}

function NumberInputOption<ParamName extends string>({
  'data-test-subj': dataTestSubj,
  disabled,
  helpText,
  error,
  isInvalid,
  label,
  placeholder,
  paramName,
  value = '',
  setValue,
}: NumberInputOptionProps<ParamName>) {
  const setNumber = (paramName, value) => {
    if (value) {
      setValue(paramName, Number(value));
    } else {
      setValue(paramName, '');
    }
  };
  
  return (
    <EuiFormRow
      helpText={helpText}
      label={label}
      error={error}
      isInvalid={isInvalid}
      fullWidth
      display="columnCompressed"
    >
      <EuiFieldNumber
        compressed={true}
        fullWidth
        isInvalid={isInvalid}
        placeholder={placeholder}
        data-test-subj={dataTestSubj}
        disabled={disabled}
        value={value}
        onChange={ev => setNumber(paramName, ev.target.value)}
      />
    </EuiFormRow>
  );
}

export { NumberInputOption };