
import { FC } from 'react'
import {KTIcon} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget8: FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Lat$$$$cts</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>More than 100 new orders</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_3'
              >
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_8_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                          <KTIcon iconName='scroll' className='fs-2x text-danger' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        School Music Festival
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>by Rose Liam</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>4:20PM, 03 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-warning'>
                          <KTIcon iconName='category' className='fs-2x text-warning' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        Maths Championship
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>10:05PM, 25 Oct</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                          <KTIcon iconName='compass' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        Who Knows Geography
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>3:22PM, 07 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-primary'>
                          <KTIcon iconName='abstract-26' className='fs-2x text-primary' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        Napoleon Days
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Luke Owen</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>1:20PM, 02 Dec</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-success'>
                          <KTIcon iconName='bucket' className='fs-2x text-success' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        The School Art Leads
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Ellie Cole</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>6:20PM, 07 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                          <KTIcon iconName='compass' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        Who Knows Geography
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>3:22PM, 07 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-warning'>
                          <KTIcon iconName='category' className='fs-2x text-warning' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        Maths Championship
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>10:05PM, 25 Oct</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                          <KTIcon iconName='scroll' className='fs-2x text-danger' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        School Music Festival
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>by Rose Liam</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>4:20PM, 03 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-warning'>
                          <KTIcon iconName='category' className='fs-2x text-warning' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        Maths Championship
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>10:05PM, 25 Oct</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                          <KTIcon iconName='compass' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        Who Knows Geography
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>3:22PM, 07 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-primary'>
                          <KTIcon iconName='abstract-26' className='fs-2x text-primary' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        Napoleon Days
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>By Luke Owen</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>1:20PM, 02 Dec</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                          <KTIcon iconName='scroll' className='fs-2x text-danger' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                        School Music Festival
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>by Rose Liam</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-gray-900 fw-bold d-block fs-7'>4:20PM, 03 Sep</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <i className='bi bi-three-dots fs-5'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget8}
