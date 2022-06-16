import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';
export { HttpIngressPath, ListMeta, StatusDetails, StatusCause, IngressSpec, ObjectMeta, OwnerReference, IngressBackend, IngressRule, IngressTls, Initializers, ManagedFieldsEntry, HttpIngressRuleValue, Initializer, IntOrString, KubeStatusProps } from './imports/k8s';


export interface AWSLoadBalancerControllerProps {
  /**
   * Standard object's metadata.
   *
   */
  readonly metadata?: k8s.ObjectMeta;

  /**
   * Spec defines the behavior of the ingress
   *
   */
  readonly spec?: k8s.IngressSpec;

}

export class AWSLoadBalancerControllerObject extends ApiObject {
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'extensions/v1beta1',
    kind: 'Ingress',
  };
  /**
   * Renders a Kubernetes manifest for an ingress object. https://github.com/kubernetes-sigs/aws-load-balancer-controller
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: AWSLoadBalancerControllerProps = {}): any {
    return {
      ...AWSLoadBalancerControllerObject.GVK,
      ...props,
    };
  }

  /**
   * Defines an "extentions" API object for AWS Load Balancer Controller - https://github.com/kubernetes-sigs/aws-load-balancer-controller
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: AWSLoadBalancerControllerProps = {}) {
    super(scope, id, AWSLoadBalancerControllerObject.manifest(props));
  }
}
