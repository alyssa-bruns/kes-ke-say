import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'
import * as newsApi from '../../routes/api.ts'
import server from '../../server.ts'
