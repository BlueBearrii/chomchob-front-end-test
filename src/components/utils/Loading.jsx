import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

export default function Loading() {
    return (
        <LoadContainer>
            <FontAwesomeIcon icon={faSpinner} color="#ff6f61" size="2x" spin/>
        </LoadContainer>
    )
}

const LoadContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`
